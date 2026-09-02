/* tslint:disable */
/* eslint-disable */

export class Engine {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    info(): string;
    is_animating(): boolean;
    key(key: string): boolean;
    mode(): number;
    /**
     * Camera drag deltas are CSS pixels, independently of display resolution.
     */
    orbit_by(dx: number, dy: number): void;
    pointer_cancel(): boolean;
    /**
     * UI coordinates are canvas backing pixels. True consumes the pointer for UI.
     */
    pointer_down(x: number, y: number): boolean;
    pointer_move(x: number, y: number): boolean;
    pointer_up(x: number, y: number): boolean;
    /**
     * Draw the scene and its controls. Dimensions are backing pixels; pixel_ratio
     * is backing pixels per CSS pixel. Supply elapsed seconds, or zero for a still frame.
     */
    render(width: number, height: number, pixel_ratio: number, delta_seconds: number): void;
    reset_view(): void;
    scene_index(): number;
    set_mode(mode: number): void;
    set_scene(scene: number): void;
    /**
     * Multipliers above one zoom out; below one zoom in.
     */
    zoom(factor: number): void;
}

export function create_renderer(canvas: HTMLCanvasElement): Promise<Engine>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_engine_free: (a: number, b: number) => void;
    readonly create_renderer: (a: any) => any;
    readonly engine_info: (a: number) => [number, number];
    readonly engine_is_animating: (a: number) => number;
    readonly engine_key: (a: number, b: number, c: number) => number;
    readonly engine_mode: (a: number) => number;
    readonly engine_orbit_by: (a: number, b: number, c: number) => [number, number];
    readonly engine_pointer_cancel: (a: number) => number;
    readonly engine_pointer_down: (a: number, b: number, c: number) => number;
    readonly engine_pointer_move: (a: number, b: number, c: number) => number;
    readonly engine_pointer_up: (a: number, b: number, c: number) => number;
    readonly engine_render: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly engine_reset_view: (a: number) => void;
    readonly engine_scene_index: (a: number) => number;
    readonly engine_set_mode: (a: number, b: number) => [number, number];
    readonly engine_set_scene: (a: number, b: number) => [number, number];
    readonly engine_zoom: (a: number, b: number) => [number, number];
    readonly main: (a: number, b: number) => number;
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wasm_bindgen_5960763df97c8f6a___JsValue__core_f0fd674eaa06beef___result__Result_____wasm_bindgen_5960763df97c8f6a___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wasm_bindgen_5960763df97c8f6a___sys__JsNullable_wgpu_8d314f9d495f3ab7___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_5960763df97c8f6a___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wasm_bindgen_5960763df97c8f6a___sys__JsNullable_wgpu_8d314f9d495f3ab7___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_5960763df97c8f6a___JsError___true__4: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wasm_bindgen_5960763df97c8f6a___sys__JsNullable_wgpu_8d314f9d495f3ab7___backend__webgpu__webgpu_sys__gen_GpuAdapter__GpuAdapter___core_f0fd674eaa06beef___result__Result_____wasm_bindgen_5960763df97c8f6a___JsError___true__5: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___js_sys_c2798bb3fdbcac60___Function_fn_wasm_bindgen_5960763df97c8f6a___JsValue_____wasm_bindgen_5960763df97c8f6a___sys__Undefined___js_sys_c2798bb3fdbcac60___Function_fn_wasm_bindgen_5960763df97c8f6a___JsValue_____wasm_bindgen_5960763df97c8f6a___sys__Undefined_______true_: (a: number, b: number, c: any, d: any) => void;
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wgpu_8d314f9d495f3ab7___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_5960763df97c8f6a___convert__closures_____invoke___wgpu_8d314f9d495f3ab7___backend__webgpu__webgpu_sys__gen_GpuDeviceLostInfo__GpuDeviceLostInfo______true__3: (a: number, b: number, c: any) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
