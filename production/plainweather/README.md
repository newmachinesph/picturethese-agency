# Plainweather TikTok video pack

Everything needed to generate the 34-second Plainweather TikTok film is in this folder.

## Layout

```
video-brief.md              master concept, timing, voiceover, continuity, edit notes
scene-directions.md         all four Veo prompts and the assembly order, in one place
_shared/
  global-continuity.txt     continuity clause appended to every scene
  negative-prompt.txt       exclusions, identical for all four scenes
scene-a-opening-shelf/      start.png · end.png · prompt.txt
scene-b-product-track/      start.png · end.png · prompt.txt
scene-c-texture-drift/      start.png · end.png · prompt.txt
scene-d-final-return/       start.png · end.png · prompt.txt
```

Each scene folder is self-contained: open its `prompt.txt`, paste the prompt
and negative prompt, attach `start.png` and `end.png`, generate. The shared
files under `_shared/` are already inlined into every `prompt.txt` — they exist
only for building a prompt by hand.

## Scenes

| Scene | Motion | Generated | Timeline |
| --- | --- | --- | --- |
| A | Slow push on the complete routine | 8s | 0:00–0:07 |
| B | Left-to-right product track | 8s | 0:07–0:16 |
| C | Overhead texture drift | 8s | 0:16–0:27 |
| D | Side-to-front final return | 8s | 0:27–0:34 |

Every keyframe is a 1080 × 1920 PNG.

## Two constraints that decide everything

**Use first-frame + last-frame input, not a style reference.** The keyframes
carry product identity — wordmark, label placement, packaging proportions. A
style reference transfers only look, and will redraw the packaging wrong.

**Veo caps a clip at 8 seconds** and accepts only 4, 6 or 8. No scene length in
the brief lands on that grid, so all four are generated at 8s and reconciled in
the edit — A and D by trimming at native speed, B and C by a constant
slowdown. `pt-remotion/scenes.json` encodes this per scene.

Generate the four scenes separately, join with hard cuts, then add voiceover,
sound, and typography in editing — never in Veo, so letterforms stay exact.
