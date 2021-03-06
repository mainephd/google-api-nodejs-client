import { cloudtrace_v1 } from './v1';
import { cloudtrace_v2 } from './v2';
export declare const VERSIONS: {
    'v1': typeof cloudtrace_v1.Cloudtrace;
    'v2': typeof cloudtrace_v2.Cloudtrace;
};
export declare function cloudtrace(version: 'v1'): cloudtrace_v1.Cloudtrace;
export declare function cloudtrace(options: cloudtrace_v1.Options): cloudtrace_v1.Cloudtrace;
export declare function cloudtrace(version: 'v2'): cloudtrace_v2.Cloudtrace;
export declare function cloudtrace(options: cloudtrace_v2.Options): cloudtrace_v2.Cloudtrace;
