const urlPopupWindow = (function () {
   let win = null;
   const open = function () {
      if (win !== null && win.isOpened()) {
         alert("You should close the opened popup window.");
         win.focus();
         return false;
      }
      win = new PopupWindow({
         url: "https://httpbin.org/get?hello=world",
         onBeforeOpen: function () {
            appendEventCapturedList(
               "url-popup-window-event-list",
               "BeforeOpen."
            );
         },
         onAfterClose: function () {
            appendEventCapturedList(
               "url-popup-window-event-list",
               "AfterClose."
            );
         },
      });
      return win.open();
   };
   const close = function () {
      if (win === null || win.isClosed()) {
         return true;
      }
      return win.close();
   };
   const closeSilently = function () {
      if (win === null || win.isClosed()) {
         return true;
      }
      return win.closeSilently();
   };
   return {
      open: open,
      close: close,
      closeSilently,
      closeSilently,
   };
})();
const formPopupWindow = (function () {
   let win = null;
   const open = function () {
      if (win !== null && win.isOpened()) {
         win.focus();
         alert("You should close the opened popup window.");
         return false;
      }
      let url = "https://httpbin.org/get?hello=world";
      if (document.form_demo.method.toUpperCase() === "POST") {
         url = "https://httpbin.org/post?hello=world";
      }
      win = new PopupWindow({
         form: document.form_demo, // the form
         url: url, // action attribute of the form
         name: "demo", // name of opened window
         onBeforeOpen: function () {
            appendEventCapturedList("form-popup-window-event-list", "Opened.");
         },
         onAfterClose: function () {
            appendEventCapturedList("form-popup-window-event-list", "Closed.");
         },
      });
      return win.open();
   };
   const close = function () {
      if (win === null || win.isClosed()) {
         return true;
      }
      return win.close();
   };
   const closeSilently = function () {
      if (win === null || win.isClosed()) {
         return true;
      }
      return win.closeSilently();
   };
   return {
      open: open,
      close: close,
      closeSilently,
      closeSilently,
   };
})();
