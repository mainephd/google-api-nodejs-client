import { pubsub_v1 } from './v1';
import { pubsub_v1beta1a } from './v1beta1a';
import { pubsub_v1beta2 } from './v1beta2';
export declare const VERSIONS: {
    'v1': typeof pubsub_v1.Pubsub;
    'v1beta1a': typeof pubsub_v1beta1a.Pubsub;
    'v1beta2': typeof pubsub_v1beta2.Pubsub;
};
export declare function pubsub(version: 'v1'): pubsub_v1.Pubsub;
export declare function pubsub(options: pubsub_v1.Options): pubsub_v1.Pubsub;
export declare function pubsub(version: 'v1beta1a'): pubsub_v1beta1a.Pubsub;
export declare function pubsub(options: pubsub_v1beta1a.Options): pubsub_v1beta1a.Pubsub;
export declare function pubsub(version: 'v1beta2'): pubsub_v1beta2.Pubsub;
export declare function pubsub(options: pubsub_v1beta2.Options): pubsub_v1beta2.Pubsub;
