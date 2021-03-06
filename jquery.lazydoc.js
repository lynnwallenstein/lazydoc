/* ========================================================
 * jquery.lazydoc.js v2.2.6
 * ========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_

 /* LAZYDOC PLUGIN DEFINITION
  * ===================== */


  $.fn.lazydoc = function ( options ) {

    options = $.extend({}, $.fn.lazydoc.defaults, options);

   return this.each(function(){

      var whichItem = $(this).data("get-code-from");
      //console.log("I think you wanted code from " + whichItem);
      //console.log("I think you want " + options.container)
      if (options.container == 'parent') {
        var theContent = $('[data-code-source="' + whichItem + '"]').removeAttr('data-code-source')[0].innerHTML;
      } else {
         var theContent = $('[data-code-source="' + whichItem + '"]').removeAttr('data-code-source')[0].outerHTML;
      }
      //console.log("So then I went and got " + theContent);
      var trimedContent = $.trim(theContent);
      //console.log("Let me clean that up for ya! ", trimedContent)
      $(this).text(trimedContent);

    });
  }

  $.fn.lazydoc.defaults = {
    container: 'child'
  }

}(window.jQuery);