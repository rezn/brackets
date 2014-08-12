/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */


/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, window, Mustache */

define(function (require, exports, module) {
    "use strict";
    
    var _ = require("thirdparty/lodash");
        
    /**
     * The view state cache.
     * @type {Object.<string,*>}
     * @private
     */
    var _viewStateCache = {};
    
    /**
     * resets the view state cache
     */
    function reset() {
        _viewStateCache = {};
    }
    
    /**
     * Sets the view state for the specfied file
     * @param {!File} file - the file to record the view state for
     * @param {?*} viewState - any data that the view needs to restore the view state.  
     */
    function setViewState(file, viewState) {
        _viewStateCache[file.fullPath] = viewState;
    }
    
    /**
     * gets the view state for the specified file
     * @param {!File} file - the file to record the view state for
     * @return {?*} whatever data that was saved earlier with a call setViewState
     */
    function getViewState(file) {
        return _viewStateCache[file.fullPath];
    }
    
    /**
     * adds an array of view states
     * @param {!object.<string, *>} viewStates - View State object to append to the current set of view states
     */
    function addViewStates(viewStates) {
        _viewStateCache = _.extend(_viewStateCache, viewStates);
    }

    /*
     * Public API
     */
    exports.reset = reset;
    exports.setViewState = setViewState;
    exports.getViewState = getViewState;
    exports.addViewStates   = addViewStates;
});
