/* tslint:disable */

@builtin export declare function iterateRoots(fn: (ref: usize) => void): void;

export namespace gc {

  export function allocate(size: usize, visitFn: (ref: usize) => void): usize {
    if (isDefined(__gc_allocate)) return __gc_allocate(size, visitFn);
    WARNING("Calling 'gc.allocate' requires a garbage collector to be present.");
    return <usize>unreachable();
  }

  export function collect(): void {
    if (isDefined(__gc_collect)) { __gc_collect(); return; }
    WARNING("Calling 'gc.collect' requires a garbage collector to be present.");
    unreachable();
  }
}
