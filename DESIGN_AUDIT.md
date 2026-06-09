# DESIGN_AUDIT.md — Portfolio Antoine ROSPARS

> Audit visuel du portfolio (React + Tailwind). Chaque item = un problème + un fix actionnable.
> Priorités : **P0** = casse la crédibilité / lisibilité, à faire en premier · **P1** = cohérence et polish · **P2** = nice-to-have.
> Les zones vides des captures sont des reveal animations non déclenchées, **ne pas traiter comme du contenu manquant**.

---

## P0 — Critique (lisibilité, contraste, crédibilité)

### P0.1 — Contraste insuffisant (accessibilité)
- **Où** : sous-titre teal du hero, liens teal clair, chips de tech grises, label "DERNIÈRE MISE À JOUR".
- **Problème** : le teal clair sur fond quasi blanc et les gris clairs passent probablement sous le seuil WCAG AA (4.5:1).
- **Fix** :
  - Assombrir l'accent teal (ex. `text-teal-700` au lieu de `text-teal-400/500`).
  - Chips de tech : `text-slate-700` sur `bg-slate-100`.
  - Vérifier chaque paire texte/fond avec un contrast checker, cible AA minimum.

### P0.2 — Bloc "À retenir / Key facts" illisible
- **Où** : hero.
- **Problème** : texte minuscule, 2 colonnes trop serrées, largeur du bloc inférieure au paragraphe au-dessus → décrochage + mauvaise lisibilité.
- **Fix** :
  - Monter la taille de police (`text-sm` minimum) et l'interligne (`leading-relaxed`).
  - Aligner la largeur du bloc sur celle du paragraphe descriptif au-dessus.
  - Espacer les deux colonnes (`gap-8`).

### P0.3 — Densité écrasante des cartes projets
- **Où** : section Projets.
- **Problème** : 4 blocs labellisés (Contexte / Problème résolu / Actions concrètes / Résultat mesurable) en texte minuscule par carte = mur de texte, scannabilité nulle.
- **Fix** :
  - Afficher par défaut 1-2 blocs max (ex. Problème résolu + Résultat mesurable).
  - Mettre le reste derrière un "Voir plus" / expand, ou sur la page détail du projet.
  - Remonter la taille du texte de carte à `text-sm`.

### P0.4 — Incohérence langue FR/EN
- **Où** : partout.
- **Problème** : page en français mais labels en anglais ("Experience", "Projects", "Featured in:", "Key facts").
- **Fix** : homogénéiser en français — "Expérience", "Projets", "Mis en avant dans :", "À retenir". Supprimer le doublon "/ Key facts".

---

## P1 — Cohérence & polish

### P1.1 — Système de couleur à clarifier (2 accents en conflit)
- **Problème** : teal (CTA, liens) ET bleu (badges de niveau) coexistent sans rôle défini.
- **Fix** : assigner un rôle à chaque couleur.
  - Teal = action / interactif (boutons, liens).
  - Bleu (ou échelle dédiée) = information / niveau de compétence.
  - Documenter ça dans le thème Tailwind (`theme.extend.colors`).

### P1.2 — Badges de niveau sans encodage couleur
- **Où** : cartes compétences.
- **Problème** : Expert / Avancé / Intermédiaire affichés mais la couleur ne reflète pas le niveau (tout paraît identique).
- **Fix** : mapper niveau → intensité couleur.
  - Expert → `bg-teal-700 text-white`
  - Avancé → `bg-teal-500 text-white`
  - Intermédiaire → `bg-slate-200 text-slate-700`

### P1.3 — Cartes non alignées en hauteur
- **Où** : grilles Compétences ET Projets.
- **Problème** : contenu de longueur variable → la ligne "Featured in" / les icônes d'action tombent à des hauteurs différentes sur une même rangée.
- **Fix** : sur chaque carte `h-full flex flex-col`, et pousser le footer (lien / icônes) en bas avec `mt-auto`. La grille parent en `items-stretch`.

### P1.4 — Footer d'icônes des cartes projet incohérent
- **Problème** : certaines cartes ont 1 icône (repo), d'autres 2 (repo + démo).
- **Fix** : toujours réserver les deux emplacements ; griser/désactiver l'icône démo si pas de lien, plutôt que de l'omettre (garde l'alignement).

### P1.5 — Boutons du hero déséquilibrés
- **Problème** : "Voir mes projets" est un bouton plein teal, GitHub et LinkedIn sont des icônes grises nues → poids visuel inégal, on dirait des oublis.
- **Fix** : donner aux icônes sociales un style cohérent — icon-buttons cerclés (`border border-slate-300 rounded-full p-2`) ou boutons outline alignés sur le CTA.

### P1.6 — Texte "arc-en-ciel" dans le bloc SEO
- **Où** : section "Développeur Fullstack Français".
- **Problème** : trop de mots-clés colorés en teal au milieu du paragraphe (EPITECH, React, TypeScript, Node.js, Docker) → bruit visuel.
- **Fix** : garder le texte en couleur normale, mettre en gras (`font-semibold`) 2-3 termes max au lieu de les colorer.

### P1.7 — Bordures & ombres de cartes trop faibles
- **Problème** : cartes peu distinctes du fond.
- **Fix** : `border border-slate-200 shadow-sm`, et hover `shadow-md transition`.

### P1.8 — Sections qui se fondent les unes dans les autres
- **Problème** : tout est blanc/gris très clair, pas de séparation visuelle entre sections.
- **Fix** : alterner les fonds de section (`bg-white` / `bg-slate-50`) ou ajouter un séparateur fin entre chaque.

### P1.9 — Tableau récap des projets redondant
- **Où** : bas de la section Projets.
- **Problème** : le tableau (Nom / Tech / Problème / Résultat / Lien) duplique l'info des cartes et a un style nu.
- **Fix** : soit le supprimer, soit en faire une **vue alternative** activable par un toggle "Cartes / Tableau" — ne pas empiler les deux.

---

## P2 — Détails & finitions

### P2.1 — Échelle typographique à resserrer
- **Problème** : saut brutal entre le H1 hero (énorme) et les H2 de section (beaucoup plus petits), pas de palier intermédiaire.
- **Fix** : définir une échelle nette, ex. H1 `text-5xl`, H2 `text-3xl`, H3 `text-xl`, body `text-base`.

### P2.2 — Underline d'accent sous les titres mal calée
- **Problème** : le petit trait teal sous les titres de section est court et désaxé par rapport au titre centré.
- **Fix** : centrer le trait sous le texte (`mx-auto`) ou le retirer.

### P2.3 — Pills "En cours d'apprentissage" orphelins
- **Problème** : petits, centrés, déconnectés de la grille de compétences au-dessus.
- **Fix** : en faire une vraie sous-section avec un titre aligné à gauche comme "Frontend / Backend / DevOps".

### P2.4 — Icônes de techno hétérogènes
- **Problème** : styles et tailles variables d'une carte à l'autre.
- **Fix** : conteneur de taille fixe (`w-10 h-10 flex items-center justify-center`) pour toutes.

### P2.5 — Toggle dark mode
- **Problème** : icône de toggle présente, page en light — vérifier que la variante dark existe vraiment.
- **Fix** : si la dark mode n'est pas implémentée, retirer le toggle (un toggle qui ne fait rien est pire que pas de toggle). Sinon, finaliser `dark:` sur tous les composants.

### P2.6 — Fond de hero trop vide
- **Problème** : gradient quasi imperceptible, aucun ancrage visuel, accentué par le whitespace.
- **Fix** : renforcer légèrement le gradient ou ajouter un élément graphique discret (grille, blob flou, motif léger) sans surcharger.

### P2.7 — Label "DERNIÈRE MISE À JOUR"
- **Problème** : uppercase minuscule, peu lisible.
- **Fix** : `text-xs font-medium tracking-wide text-slate-500`, ou le transformer en simple date discrète.

---

## Ordre d'attaque suggéré
1. P0.1 → P0.4 (lisibilité/contraste/langue) — impact crédibilité immédiat.
2. P1.1 + P1.2 (système couleur) — débloque les fixes de badges et liens.
3. P1.3 + P1.4 (alignements de cartes) — un seul pattern `flex flex-col` + `mt-auto` règle Compétences ET Projets.
4. Le reste P1, puis P2 au fil de l'eau.