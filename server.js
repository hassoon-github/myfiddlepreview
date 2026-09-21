if (window.self !== window.top) {
	var isProdMode = location.origin === "https://hassoon-github.github.io" ? true : false;

	var fiddleOrigin = isProdMode ? "https://ghanhass.github.io" : "http://localhost:4200";
	var iframeEl = null;

	writeInIframe(`
    			<!DOCTYPE html>
    			<html>
    			    <head>
    			    <meta charset="utf-8">
    			    <meta name="referrer" content="strict-origin-when-cross-origin">
					<script>
					window.addEventListener("load", function () {
						//console.log("load event inside the sub iframe!");
						//console.log("-----------------------------");
						window.parent.postMessage({type:"sub-iframe-loaded"}, location.origin);
					});
					</script>
    			    </head>
    			    <body> 
    			    </body>
    			</html>`);

	//generateConsoleStyleSheet();


	function generateIframe() {
		if (iframeEl) {
			iframeEl.remove();
		}
		iframeEl = document.createElement("iframe");
		iframeEl.style.cssText = "height:100%; width:100%; border:none;";
		document.body.prepend(iframeEl);

	}
	
	function writeInIframe(htmlDocumentCode) {
		generateIframe();

		var document = iframeEl.contentDocument || iframeEl.contentWindow.document;
		document.open();
		document.write(htmlDocumentCode);
		document.close();
	}

	function generateDocument(data) {
		//var consolePanelEl = myfiddleConsoleEl.shadowRoot.querySelector("#console-panel.console-panel");
		//console.log("generateFiddleCode data: ", data);
		let htmlCode = data.html || '';
		let cssCode = data.css || '';
		let jsCode = data.js || "";

		let htmlDocumentCode = `
    			<!DOCTYPE html>
    			<html>
    			    <head>
    			    <meta charset="utf-8">
    			    <meta name="referrer" content="strict-origin-when-cross-origin">
    			    </head>
    			    <body> 
    			        <!---->
    			        <script>
					  	window.onerror = function(e) {
					  		window.detectedError = e;
					  	};
					    </script>
						<script>
						window.addEventListener("load", function () {
							//console.log("load event inside the sub iframe!");
							//console.log("-----------------------------");
							window.parent.postMessage({type:"sub-iframe-loaded"}, location.origin);
						});
						</script>
    			        
    			        <!---->

    			        ${htmlCode}

    			        <style>${cssCode}</style>
    			        <script>${jsCode}</script>
    			    </body>
    			</html>`;

		writeInIframe(htmlDocumentCode);

	}


	window.addEventListener("message", function (event) {


		if (event.origin === location.origin && event.data.type === "sub-iframe-loaded") {
			//console.log("iframe message event received: ", event);
			//generateConsoleStyleSheet(event.data.currentTheme);
			window.parent.postMessage({ type: "sub-iframe-loaded" }, fiddleOrigin);
		}
		else if (event.origin === fiddleOrigin && event.data.type === "run") {
			//console.log("iframe RUN message even received: ", event);
			//generateConsoleStyleSheet(event.data.currentTheme);
			window.parent.postMessage({ type: "run-message-received" }, fiddleOrigin);
			var data = JSON.parse(event.data.data);
			generateDocument(data);
		}
		else if(event.origin === fiddleOrigin && event.data.type === "print"){
			iframeEl.contentWindow.print();
		}
	});



	//console.log("inline script started");
} else {
	document.body.innerHTML = "<h1>Running this web page directly is forbidden, good day.</h1>"
}
