/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosPromise } from 'axios';
import { Compute, JWT, OAuth2Client, UserRefreshClient } from 'google-auth-library';
import { BodyResponseCallback, GlobalOptions, GoogleConfigurable, MethodOptions } from 'googleapis-common';
export declare namespace texttospeech_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API
         * access, quota, and reports. Required unless you provide an OAuth 2.0
         * token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be
         * any arbitrary string assigned to a user, but should not exceed 40
         * characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Cloud Text-to-Speech API
     *
     * Synthesizes natural-sounding speech by applying powerful neural network
     * models.
     *
     * @example
     * const {google} = require('googleapis');
     * const texttospeech = google.texttospeech('v1');
     *
     * @namespace texttospeech
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Texttospeech
     */
    class Texttospeech {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        text: Resource$Text;
        voices: Resource$Voices;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Description of audio data to be synthesized.
     */
    interface Schema$AudioConfig {
        /**
         * Required. The format of the requested audio byte stream.
         */
        audioEncoding?: string;
        /**
         * Optional speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20
         * semitones from the original pitch. -20 means decrease 20 semitones from
         * the original pitch.
         */
        pitch?: number;
        /**
         * The synthesis sample rate (in hertz) for this audio. Optional.  If this
         * is different from the voice&#39;s natural sample rate, then the
         * synthesizer will honor this request by converting to the desired sample
         * rate (which might result in worse audio quality), unless the specified
         * sample rate is not supported for the encoding chosen, in which case it
         * will fail the request and return google.rpc.Code.INVALID_ARGUMENT.
         */
        sampleRateHertz?: number;
        /**
         * Optional speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal
         * native speed supported by the specific voice. 2.0 is twice as fast, and
         * 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any
         * other values &lt; 0.25 or &gt; 4.0 will return an error.
         */
        speakingRate?: number;
        /**
         * Optional volume gain (in dB) of the normal native volume supported by the
         * specific voice, in the range [-96.0, 16.0]. If unset, or set to a value
         * of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0
         * (dB) will play at approximately half the amplitude of the normal native
         * signal amplitude. A value of +6.0 (dB) will play at approximately twice
         * the amplitude of the normal native signal amplitude. Strongly recommend
         * not to exceed +10 (dB) as there&#39;s usually no effective increase in
         * loudness for any value greater than that.
         */
        volumeGainDb?: number;
    }
    /**
     * The message returned to the client by the `ListVoices` method.
     */
    interface Schema$ListVoicesResponse {
        /**
         * The list of voices.
         */
        voices?: Schema$Voice[];
    }
    /**
     * Contains text input to be synthesized. Either `text` or `ssml` must be
     * supplied. Supplying both or neither returns
     * google.rpc.Code.INVALID_ARGUMENT. The input size is limited to 5000
     * characters.
     */
    interface Schema$SynthesisInput {
        /**
         * The SSML document to be synthesized. The SSML document must be valid and
         * well-formed. Otherwise the RPC will fail and return
         * google.rpc.Code.INVALID_ARGUMENT. For more information, see
         * [SSML](/speech/text-to-speech/docs/ssml).
         */
        ssml?: string;
        /**
         * The raw text to be synthesized.
         */
        text?: string;
    }
    /**
     * The top-level message sent by the client for the `SynthesizeSpeech` method.
     */
    interface Schema$SynthesizeSpeechRequest {
        /**
         * Required. The configuration of the synthesized audio.
         */
        audioConfig?: Schema$AudioConfig;
        /**
         * Required. The Synthesizer requires either plain text or SSML as input.
         */
        input?: Schema$SynthesisInput;
        /**
         * Required. The desired voice of the synthesized audio.
         */
        voice?: Schema$VoiceSelectionParams;
    }
    /**
     * The message returned to the client by the `SynthesizeSpeech` method.
     */
    interface Schema$SynthesizeSpeechResponse {
        /**
         * The audio data bytes encoded as specified in the request, including the
         * header (For LINEAR16 audio, we include the WAV header). Note: as with all
         * bytes fields, protobuffers use a pure binary representation, whereas JSON
         * representations use base64.
         */
        audioContent?: string;
    }
    /**
     * Description of a voice supported by the TTS service.
     */
    interface Schema$Voice {
        /**
         * The languages that this voice supports, expressed as
         * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags
         * (e.g. &quot;en-US&quot;, &quot;es-419&quot;, &quot;cmn-tw&quot;).
         */
        languageCodes?: string[];
        /**
         * The name of this voice.  Each distinct voice has a unique name.
         */
        name?: string;
        /**
         * The natural sample rate (in hertz) for this voice.
         */
        naturalSampleRateHertz?: number;
        /**
         * The gender of this voice.
         */
        ssmlGender?: string;
    }
    /**
     * Description of which voice to use for a synthesis request.
     */
    interface Schema$VoiceSelectionParams {
        /**
         * The language (and optionally also the region) of the voice expressed as a
         * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag, e.g.
         * &quot;en-US&quot;. Required. This should not include a script tag (e.g.
         * use &quot;cmn-cn&quot; rather than &quot;cmn-Hant-cn&quot;), because the
         * script will be inferred from the input provided in the SynthesisInput.
         * The TTS service will use this parameter to help choose an appropriate
         * voice.  Note that the TTS service may choose a voice with a slightly
         * different language code than the one selected; it may substitute a
         * different region (e.g. using en-US rather than en-CA if there isn&#39;t a
         * Canadian voice available), or even a different language, e.g. using
         * &quot;nb&quot; (Norwegian Bokmal) instead of &quot;no&quot;
         * (Norwegian)&quot;.
         */
        languageCode?: string;
        /**
         * The name of the voice. Optional; if not set, the service will choose a
         * voice based on the other parameters such as language_code and gender.
         */
        name?: string;
        /**
         * The preferred gender of the voice. Optional; if not set, the service will
         * choose a voice based on the other parameters such as language_code and
         * name. Note that this is only a preference, not requirement; if a voice of
         * the appropriate gender is not available, the synthesizer should
         * substitute a voice with a different gender rather than failing the
         * request.
         */
        ssmlGender?: string;
    }
    class Resource$Text {
        root: Texttospeech;
        constructor(root: Texttospeech);
        getRoot(): Texttospeech;
        /**
         * texttospeech.text.synthesize
         * @desc Synthesizes speech synchronously: receive results after all text
         * input has been processed.
         * @alias texttospeech.text.synthesize
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().SynthesizeSpeechRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        synthesize(params?: Params$Resource$Text$Synthesize, options?: MethodOptions): AxiosPromise<Schema$SynthesizeSpeechResponse>;
        synthesize(params: Params$Resource$Text$Synthesize, options: MethodOptions | BodyResponseCallback<Schema$SynthesizeSpeechResponse>, callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>): void;
        synthesize(params: Params$Resource$Text$Synthesize, callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>): void;
        synthesize(callback: BodyResponseCallback<Schema$SynthesizeSpeechResponse>): void;
    }
    interface Params$Resource$Text$Synthesize extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SynthesizeSpeechRequest;
    }
    class Resource$Voices {
        root: Texttospeech;
        constructor(root: Texttospeech);
        getRoot(): Texttospeech;
        /**
         * texttospeech.voices.list
         * @desc Returns a list of Voice supported for synthesis.
         * @alias texttospeech.voices.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.languageCode Optional (but recommended) [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. E.g. when specifying "en-NZ", you will get supported "en-*" voices; when specifying "no", you will get supported "no-*" (Norwegian) and "nb-*" (Norwegian Bokmal) voices; specifying "zh" will also get supported "cmn-*" voices; specifying "zh-hk" will also get supported "yue-*" voices.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Voices$List, options?: MethodOptions): AxiosPromise<Schema$ListVoicesResponse>;
        list(params: Params$Resource$Voices$List, options: MethodOptions | BodyResponseCallback<Schema$ListVoicesResponse>, callback: BodyResponseCallback<Schema$ListVoicesResponse>): void;
        list(params: Params$Resource$Voices$List, callback: BodyResponseCallback<Schema$ListVoicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVoicesResponse>): void;
    }
    interface Params$Resource$Voices$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional (but recommended)
         * [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If
         * specified, the ListVoices call will only return voices that can be used
         * to synthesize this language_code. E.g. when specifying "en-NZ", you will
         * get supported "en-*" voices; when specifying "no", you will get supported
         * "no-*" (Norwegian) and "nb-*" (Norwegian Bokmal) voices; specifying "zh"
         * will also get supported "cmn-*" voices; specifying "zh-hk" will also get
         * supported "yue-*" voices.
         */
        languageCode?: string;
    }
}
