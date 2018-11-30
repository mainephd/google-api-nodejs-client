import { slides_v1 } from './v1';
export declare const VERSIONS: {
    'v1': typeof slides_v1.Slides;
};
export declare function slides(version: 'v1'): slides_v1.Slides;
export declare function slides(options: slides_v1.Options): slides_v1.Slides;
