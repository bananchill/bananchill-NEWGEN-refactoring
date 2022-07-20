import 'dotenv/config'

export default class ApiHelper {
    #p_endpoint;

    constructor(_endpoint) {
        this.#p_endpoint = `${process.env.API_URL}${_endpoint}`;
    }

    requestJsonAsync(_relativeUrl, _request) {
        return this.requestAsync(_relativeUrl, _request, _response => _response.json());
    }
    async requestAsync(_relativeUrl, _request, _resolvePayloadAsync) {
        const endpoint = `${this.#p_endpoint}${_relativeUrl}`;

        try {
            let response;
            try {
                response = await fetch(endpoint, _request);
            }
            catch (e) {
               throw new Error(e)
            }

            if (!response.ok || response.status !== 200) {
                throw new Error(`${response.status}`);
            }
            if (_resolvePayloadAsync == null)
                return;

            const payload = await _resolvePayloadAsync(response);
            return payload;

        }
        catch (e) {
            throw e;
        }
    }

}
