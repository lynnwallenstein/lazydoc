/* ========================================================
 * jquery.lazydoc.js v2.2.5
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

  var trimmer = function trimmer (text) {
    var i, leadingSpaces, lines, linesLength, match;

    lines = text.split("\n");
    match = /^(\s)/.exec(lines[0]);
    if (null == match) {
      return text;
    };
    leadingSpaces = match[1].length;

    for(i=0, linesLength = lines.length; i < linesLength; i++) {
      lines[i] = lines[i].substring(leadingSpaces - 1);
    };

    return lines.join("\n");
  };

 /* LAZYDOC PLUGIN DEFINITION
  * ===================== */

  $.fn.lazydoc = function ( ) {

       return this.each(function(){

          var whichItem = $(this).data("get-code-from");
          //console.log("I think you wanted code from " + whichItem);
          var theContent = $('[data-code-source="' + whichItem + '"]').removeAttr('data-code-source')[0].outerHTML;
          //console.log("So then I went and got " + theContent);
          var trimmedContent = trimmer($.trim(theContent));
          //console.log("Let me clean that up for ya! ", trimmedContent)
          $(this).text(trimmedContent);

        });
  }

}(window.jQuery);
