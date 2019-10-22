var stream = new EventSource(&quot;/sse&quot;);

// When a connection is made
stream.onopen = function() {
console.log(&#39;Opened connection &#39;);
};
stream.onerror = function (event) {
console.log(event);
};

// When data is received
stream.onmessage = function (event) {
console.log(event.data);
};
stream.onclose = function(code, reason) {
console.log(code, reason);
}

window.addEventListener(&#39;beforeunload&#39;, function() {
stream.close();
});
