// The entry file of your WebAssembly module.

export function scale_health(wave: i32): i32 {
  if (wave < 5) return 60;
  return 60 + 5 * (wave - 5);
}