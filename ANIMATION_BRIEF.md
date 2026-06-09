# ANIMATIONS_BRIEF.md — Portfolio Antoine ROSPARS

> Brief pour l'agent : ajouter des animations au scroll **style Apple** (parallax, reveals, sticky) sur le portfolio.
> Stack : **React + Tailwind**. Libs : **Motion** (`motion/react`, ex-Framer Motion) + **Lenis** (smooth scroll).
> Objectif : moderne, fluide, **sobre**. Pas un sapin de Noël — 4 moments forts max sur la page.

---

## Contraintes globales (NON NÉGOCIABLES)

1. **Respecter `prefers-reduced-motion` partout.**
   - Utiliser `useReducedMotion()` de Motion. Si l'utilisateur a activé la réduction de mouvement → contenu en état final statique, aucun mouvement.
   - En CSS, wrapper les effets dans `@media (prefers-reduced-motion: no-preference)`.

2. **Animer uniquement `transform` et `opacity`.**
   - Jamais `top`, `left`, `height`, `width`, `margin`, `padding` au scroll → repaint/reflow à chaque frame = lag.
   - Pas de `will-change` posé globalement ; seulement sur les éléments réellement animés en continu, et le retirer après.

3. **Sobriété.** Maximum 4 effets marquants sur l'ensemble de la page. Si tout bouge, l'effet premium disparaît.

4. **Performance.** Cible 60fps minimum (120fps si l'appareil suit). Tester avec le throttling CPU x4 des DevTools.

5. **Mobile.** Désactiver ou alléger fortement parallax et sticky sur petit écran (`< md`) — souvent contre-productifs au doigt. Garder les reveals simples.

6. **Méthode de travail : une section à la fois.** Implémenter, montrer le code, attendre validation avant de passer à la section suivante. Ne PAS refactorer toute la page d'un coup.

---

## Setup

```bash
npm install motion lenis
```

- Import Motion : `import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"`.
- Lenis : initialiser une fois au niveau racine (composant `<App>` ou layout), avec un fallback : si `prefers-reduced-motion` est actif, **ne pas** activer le smooth scroll inertiel.
- Si le projet est en Next.js App Router : les composants Motion sont client-only → ajouter `"use client"` en tête des fichiers concernés.

---

## Spécifications par section

> Ordre des sections tel qu'observé sur le portfolio : Nav → Hero → Bloc SEO → Compétences → Projets.

### 1. Nav (sticky header)
- **Comportement** : au scroll vers le bas (au-delà du hero), la nav passe d'un fond transparent à un fond légèrement opaque + fine bordure basse + `shadow-sm`. Transition douce sur `background` et `box-shadow` uniquement.
- **Détail** : pas d'apparition/disparition de la nav, juste le changement d'état. Durée ~200ms, easing standard.
- **Reduced motion** : appliquer directement l'état "scrollé" sans transition.

### 2. Hero
Trois éléments, animés à des intensités différentes pour créer de la profondeur :
- **Titre + sous-titre** : à l'arrivée sur la page (mount), fade + léger `translateY` (de ~16px) → position finale. Optionnel : effet blur→net (`filter: blur(8px)` → `blur(0)`). Stagger léger entre titre et sous-titre (~80ms).
- **Visuel / fond du hero** : **parallax léger** — il dérive un peu plus lentement que le texte au scroll (`useScroll` + `useTransform` mappant le scroll Y sur un petit `translateY`, amplitude faible ~ -40px). Subtil, pas spectaculaire.
- **Bloc "À retenir"** : reveal en fade+up déclenché à l'entrée viewport (`whileInView`), une seule fois (`viewport={{ once: true }}`).
- **Rangée de boutons (CTA + GitHub + LinkedIn)** : apparition en stagger après le titre (~60ms entre chaque). Micro-interaction au survol : léger `scale(1.03)` sur le CTA.
- **Reduced motion** : tout en état final, aucun parallax, aucun blur.

### 3. Bloc SEO ("Développeur Fullstack Français")
- **Comportement** : reveal simple en fade+up quand la section entre dans le viewport. Rien de plus — c'est un bloc de texte, pas un moment fort.
- **Reduced motion** : statique.

### 4. Compétences techniques (grilles Frontend / Backend / DevOps)
- **Titre de section + sous-titre** : fade+up à l'entrée.
- **Cartes de chaque grille** : reveal en **stagger** quand la grille entre dans le viewport — décalage ~60ms entre chaque carte, fade + `translateY` ~20px. Utiliser un container `motion` avec `staggerChildren` plutôt que d'animer chaque carte individuellement.
- **Important** : `viewport={{ once: true }}` pour que ça ne se rejoue pas à chaque passage (sinon effet "clignotant" agaçant en remontant).
- **Pills "En cours d'apprentissage"** : reveal léger en stagger après les grilles.
- **Micro-interaction** : au survol d'une carte, élévation douce (`translateY(-4px)` + `shadow-md`), transition ~200ms.
- **Reduced motion** : cartes en état final, hover conservé (le hover n'est pas du scroll-motion, ok à garder mais sans le translate si on veut être strict).

### 5. Projets (LE moment fort)
C'est ici qu'on place l'effet "Apple". Deux options selon l'ambition — **commencer par l'option A**, garder B pour un v2 si validé.

**Option A — reveals + stagger (sûr, recommandé en premier)**
- Titre de section : fade+up.
- Cartes projet : reveal en stagger à l'entrée de chaque rangée (~70ms de décalage), fade + `translateY` ~24px.
- Hover carte : élévation douce + révéler/accentuer les icônes d'action (repo / démo).
- `viewport={{ once: true }}`.

**Option B — sticky showcase pour le projet phare (v2, plus ambitieux)**
- Choisir 1 projet vedette (ex. AutoScanlate AI).
- Section en **sticky** : le visuel/screenshot reste collé à l'écran (`position: sticky` ou pin Motion) pendant que le texte descriptif défile à côté, et le visuel `scale` légèrement (de 1 à ~1.05) sur la durée du scroll de la section.
- Mapper le scroll progress de la section sur le scale et l'opacité via `useScroll({ target, offset })` + `useTransform`.
- **Mobile** : désactiver le sticky, retomber sur un layout vertical simple avec reveal classique.

- **Tableau récap** (si conservé) : fade simple, pas d'animation par ligne (lourd et inutile).
- **Reduced motion** : option A en état final ; option B → pas de sticky/scale, layout statique.

---

## Ordre d'implémentation suggéré

1. **Setup Lenis + helper reduced-motion** (la fondation du "feel", à valider isolément).
2. **Reveals génériques** (Bloc SEO, titres de section) — pattern réutilisable `<Reveal>`.
3. **Compétences** (stagger) — réutilise le pattern.
4. **Projets option A** (stagger) — réutilise encore.
5. **Hero** (parallax + mount animation) — un peu plus custom.
6. **Nav sticky** (changement d'état).
7. *(Optionnel, après validation)* **Projets option B** (sticky showcase).

> Réutiliser un composant `<Reveal>` partagé pour 90% des reveals évite de réinventer la roue à chaque section et garde le timing cohérent.

---

## Checklist d'acceptation (par section)

- [ ] Aucune prop de layout animée (seulement transform/opacity) ?
- [ ] `prefers-reduced-motion` testé (activer dans les réglages OS ou émuler dans DevTools) → contenu lisible et statique ?
- [ ] `viewport={{ once: true }}` sur les reveals (pas de re-trigger en remontant) ?
- [ ] 60fps maintenu avec CPU throttling x4 ?
- [ ] Comportement mobile vérifié (parallax/sticky allégés ou désactivés) ?
- [ ] Le contenu reste accessible et visible même si le JS d'animation échoue ?

---

## Note sur le CSS natif (optionnel)

Si l'agent veut alléger le bundle, les reveals simples peuvent passer en CSS natif scroll-driven (`animation-timeline: view()`), supporté en 2026 sur Chrome/Edge/Safari, partiel sur Firefox. À n'utiliser **qu'en progressive enhancement**, wrappé dans `@supports (animation-timeline: view())`, avec l'élément visible par défaut en fallback. Ne pas en faire la base des effets critiques.