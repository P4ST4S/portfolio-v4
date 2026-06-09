import AppKit

let width = 1200
let height = 630
let outputPath = "public/og-image.png"

let bitmap = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: width,
  pixelsHigh: height,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: 0,
  bitsPerPixel: 0
)!

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: bitmap)

func color(_ hex: UInt32, alpha: CGFloat = 1) -> NSColor {
  NSColor(
    calibratedRed: CGFloat((hex >> 16) & 0xff) / 255,
    green: CGFloat((hex >> 8) & 0xff) / 255,
    blue: CGFloat(hex & 0xff) / 255,
    alpha: alpha
  )
}

func top(_ y: CGFloat, _ h: CGFloat) -> CGFloat {
  CGFloat(height) - y - h
}

func roundedRect(x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat, radius: CGFloat, fill: NSColor) {
  fill.setFill()
  NSBezierPath(
    roundedRect: NSRect(x: x, y: top(y, h), width: w, height: h),
    xRadius: radius,
    yRadius: radius
  ).fill()
}

func text(
  _ value: String,
  x: CGFloat,
  y: CGFloat,
  width: CGFloat,
  height: CGFloat,
  size: CGFloat,
  weight: NSFont.Weight,
  fill: NSColor
) {
  let paragraph = NSMutableParagraphStyle()
  paragraph.lineBreakMode = .byTruncatingTail

  let attributes: [NSAttributedString.Key: Any] = [
    .font: NSFont.systemFont(ofSize: size, weight: weight),
    .foregroundColor: fill,
    .paragraphStyle: paragraph,
  ]

  value.draw(
    in: NSRect(x: x, y: top(y, height), width: width, height: height),
    withAttributes: attributes
  )
}

let background = NSGradient(
  starting: color(0xf8fafc),
  ending: color(0xe2e8f0)
)!
background.draw(in: NSRect(x: 0, y: 0, width: width, height: height), angle: -35)

color(0x00c4b3).setFill()
NSBezierPath(rect: NSRect(x: 0, y: CGFloat(height - 12), width: CGFloat(width), height: 12)).fill()

color(0x00c4b3, alpha: 0.12).setFill()
NSBezierPath(ovalIn: NSRect(x: 900, y: 430, width: 300, height: 300)).fill()
color(0x0f172a, alpha: 0.06).setFill()
NSBezierPath(ovalIn: NSRect(x: 870, y: 40, width: 360, height: 360)).fill()

roundedRect(x: 84, y: 76, w: 132, h: 132, radius: 26, fill: color(0x0f172a))
let mark = NSBezierPath()
mark.move(to: NSPoint(x: 150, y: top(108, 0)))
mark.line(to: NSPoint(x: 196, y: top(176, 0)))
mark.line(to: NSPoint(x: 170, y: top(176, 0)))
mark.line(to: NSPoint(x: 150, y: top(139, 0)))
mark.line(to: NSPoint(x: 130, y: top(176, 0)))
mark.line(to: NSPoint(x: 104, y: top(176, 0)))
mark.close()
color(0x2dd4bf).setFill()
mark.fill()
roundedRect(x: 166, y: 136, w: 34, h: 18, radius: 0, fill: color(0xf8fafc))

text(
  "Antoine ROSPARS",
  x: 84,
  y: 250,
  width: 980,
  height: 86,
  size: 76,
  weight: .heavy,
  fill: color(0x0f172a)
)
text(
  "Fullstack React/TypeScript Developer",
  x: 84,
  y: 346,
  width: 980,
  height: 46,
  size: 36,
  weight: .bold,
  fill: color(0x0f766e)
)
text(
  "Paris - Epitech - Datakeen - AI - Go - Node.js",
  x: 84,
  y: 405,
  width: 980,
  height: 38,
  size: 28,
  weight: .medium,
  fill: color(0x334155)
)

roundedRect(x: 84, y: 508, w: 282, h: 48, radius: 8, fill: color(0x0f172a))
text("antoinerospars.dev", x: 106, y: 519, width: 238, height: 28, size: 22, weight: .bold, fill: color(0xf8fafc))

roundedRect(x: 390, y: 508, w: 238, h: 48, radius: 8, fill: color(0xccfbf1))
text("Lighthouse 95+", x: 414, y: 519, width: 190, height: 28, size: 22, weight: .bold, fill: color(0x0f766e))

roundedRect(x: 652, y: 508, w: 166, h: 48, radius: 8, fill: color(0xe0f2fe))
text("91% tests", x: 676, y: 519, width: 118, height: 28, size: 22, weight: .bold, fill: color(0x0369a1))

NSGraphicsContext.restoreGraphicsState()

let data = bitmap.representation(using: .png, properties: [:])!
try data.write(to: URL(fileURLWithPath: outputPath))
print("Wrote \(outputPath) (\(width)x\(height))")
