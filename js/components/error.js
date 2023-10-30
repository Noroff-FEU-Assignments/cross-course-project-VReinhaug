function apiError(errorType="success", message = "") {

    return `<div class="apiError $(errorType)">$(message)</div>`;
    
}