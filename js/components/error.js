function message(messageType="success", message = "") {

    return `<div class="error $(messageType)">$(message)</div>`;
    
}