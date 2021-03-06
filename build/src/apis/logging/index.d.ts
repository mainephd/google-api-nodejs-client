import { logging_v2 } from './v2';
import { logging_v2beta1 } from './v2beta1';
export declare const VERSIONS: {
    'v2': typeof logging_v2.Logging;
    'v2beta1': typeof logging_v2beta1.Logging;
};
export declare function logging(version: 'v2'): logging_v2.Logging;
export declare function logging(options: logging_v2.Options): logging_v2.Logging;
export declare function logging(version: 'v2beta1'): logging_v2beta1.Logging;
export declare function logging(options: logging_v2beta1.Options): logging_v2beta1.Logging;
