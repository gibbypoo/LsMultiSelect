// ============================================================================================
// ============================================================================================
// lsWires.js
//
// Library that enhances development with LightSwitch 2013 HTML Projects
// This will be a full rewrite of an earlier version and a consolidation from a number
// of other itg projects
//
// Dependencies:  Yep, lo-dash.js
//
// Licensing? Nope, free to use and modify as you see fit
// Bugs? Maybe
// Liability? Nope, use at your own risk, fix what doesnt work
//
// jqf? jQuery Free!
// 
// http://blog.ofAnITGuy.com
// 
// 5-12-2014 -	Major rewrite of most modules, especially the Multi-Select
// 5-10-2014 -	Changed name to lsWire
//				Added input.characterLimit
// ============================================================================================
// ============================================================================================

// Does our namespace exist
window.lsWire = window.lsWire || {};

(function () {

	window.lsWire.button = {

		// =================================================================================================
		// Change the icon of a button
		// =================================================================================================
		changeIcon: (function (element, currentIconClass, newIconClass) {

			/// <summary>Change the icon of a button</summary>
			/// <param name="element" type="object">The element that displays our icon</param>
			/// <param name="currentIconClass" type="string">Class name of the current icon</param>
			/// <param name="newIconClass" type="string">Class name of the new icon</param>

			$(element).find(".ui-icon")
				.removeClass(currentIconClass)
				.addClass(newIconClass);

		}),


		// ==========================================================================================
		// Quick little function to convert a standard button to Iconic button
		// ==========================================================================================
		renderAsIcon: function (element, contentItem, icon, noText) {

			/// <summary>Render a standard button as an icon button</summary>
			/// <param name="element" type="object">The button element to convert</param>
			/// <param name="contentItem" type="object">contentItem of the standard button</param>
			/// <param name="icon" type="string">Class name of the icon<br/>
			/// ok, cancel, discard, decline, save, logout, back, search, camera, trash, add, remove,<br/>
			/// video, tag, gear, contacts, edit, question, refreesh, list, folder, move, text, attachment,<br/>
			/// warning, star, addfavorite, filter, sort, addpicture, document, download, calendar, dropdown<br/>		
			/// </param>
			/// <param name="noText" type="boolean">Optional<br/>
			/// Show button text or not, defaults to false
			/// </param>

			// Create our html items for our button
			var $div = $('<div class="id-element msls-large-icon ui-btn ui-shadow ui-mini ui-btn-icon-top ui-btn-up-a" data-theme="a" style="box-shadow: none;"></div>');
			var $innerButton = $('<span class="ui-btn-inner"></span>');
			var $textSpan = $('<span class="ui-btn-text">' + contentItem.displayName + '</span>');
			var $iconSpan = $('<span class="ui-icon ui-icon-msls-' + icon + ' ui-icon-shadow">&nbsp;</span>');

			// Default noText to false (show text)
			noText = noText || false;

			if (noText == true) {

				// Add all of our items under the big div
				$div.append($innerButton.append($iconSpan));

			} else {

				// Add all of our items under the big div
				$div.append($innerButton.append($textSpan).append($iconSpan));

				// Bind to the displayName so the text can be dynamically changed
				contentItem.dataBind('displayName', function (newValue) {
					$textSpan.text(newValue);
				});

			}

			// Add our new button to the element
			$(element).html($div);

			// Removing the msls-leaf will drop the big padding typically used
			$(element).closest('.msls-leaf').removeClass('msls-leaf');

		}

	};

	window.lsWire.input = {

		// =================================================================================================
		// Enhance an input controls associated label to show a realtime character count
		// =================================================================================================
		characterLimit: function (contentItem, maxLength, options) {

			/// <summary>Enhance an Input control to limit the number of allowed characters.<br/>
			/// Also will update the associated label to show a realtime character count</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the input control</param>
			/// <param name="maxLength" type="integer">Maximum number of characters allowed</param>
			/// <param name="options" type="object">Optional<br/>
			/// {<br/>
			///    labelTemplate: String "{{displayName}} ({{count}} of {{max}} characters left)"<br/>
			///    showCount: Boolean - Force the showing/hiding of the counter in the label<br/>
			/// }<br/>
			/// {{displayName}} - Inserts the contentItems displayName<br/>
			/// {{count}} - Inserts the current character count of the input<br/>
			/// {{max}} - Inserts the maximum count allowed<br/>
			/// Defaults to showing the label count, IF the label is there.


			// Default our options, only the template at this stage.
			options = options || {};
			var labelTemplate = options.labelTemplate || "{{displayName}} ({{count}} of {{max}} characters left)"
			var showCount = showCount === undefined ? true : showCount;

			// Bind to the isRendered property so we know when its safe
			contentItem.dataBind("_view.isRendered", function (isRendered) {

				if (isRendered) {

					// If no label... do nothing except return
					if (contentItem.properties.attachedLabelPosition === "None" || contentItem.properties.attachedLabelPosition === "Hidden")
						showCount = false;

					// Get the label element to hold the messaging
					var label = contentItem._view._container[0].getElementsByTagName('label')[0];
					var input = contentItem._view._container[0].getElementsByClassName('id-element')[0];

					// Get our text area
					var displayName = contentItem.displayName;

					// Add the initial messaging
					if (showCount)
						updateCharacterCountLabel(label, displayName, contentItem.value.length, maxLength, labelTemplate);

					// Setup listener number 1...  for pasted text
					// =================================================================================================
					input.onpaste = function (e) {
					
						// As usual, don't let the default happen
						e.preventDefault();
						var pastedText = undefined;

						// Differences between IE and others, get the pasted text
						if (window.clipboardData && window.clipboardData.getData) {
							pastedText = window.clipboardData.getData('Text');
						} else if (e.clipboardData && e.clipboardData.getData) {
							pastedText = e.clipboardData.getData('text/plain');
						}

						// Add existing text with pasted text, then truncate to the max allowed
						contentItem.value = (input.value + pastedText).substring(0, maxLength);

						// Update the label with the new counts
						if (showCount)
							updateCharacterCountLabel(label, displayName, contentItem.value.length, maxLength, labelTemplate);

					};

					// Setup listener number 2...  for keydowns
					// =================================================================================================
					input.onkeydown = function (e) {

						// Going forward with new character or backspacing, don't process if just arrow keys
						if (e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {

							// keycode 8 is backspace
							var nextLength = e.keyCode === 8
								? e.target.value.length - 1
								: e.target.value.length + 1;

							// Make sure we don't go over our boundries
							if (nextLength < 0 || (nextLength > maxLength && e.keyCode )) {
								e.preventDefault();
								return false;
							};

							// Update our label with new counts
							if (showCount)
								updateCharacterCountLabel(label, displayName, nextLength, maxLength, labelTemplate);
						}
						return true;
					};
				}
			});


			// =================================================================================================
			// Helper function to update an input elements label with our character count template
			// =================================================================================================
			var updateCharacterCountLabel = function (label, displayName, value, maxLength, template) {

				// Get the initial number of characters left
				var whatsLeft = maxLength - value;

				// Add the messaging
				var countText = template.replace("{{displayName}}", displayName);
				countText = countText.replace("{{count}}", whatsLeft);
				countText = countText.replace("{{max}}", maxLength);
				label.innerText = countText;

			};

		}

	};

	window.lsWire.list = {

		// ==========================================================================================
		// Enable multi-item selections for a list/table
		// ==========================================================================================
		enableMultiSelect: function (contentItem, options) {

			/// <summary>Enable Multi-Item selection on a list/table</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the list/table control</param>
			/// <param name="options" type="object">Optional<br />
			/// {<br/>
			/// totalAllowedSelections: integer - Maximum number of items that can be selected<br />
			/// persistSelections: boolean - Whether to persist selections for this session<br/>
			/// }<br/>
			/// Defaults to unlimited selctions and do not persist session selections<br/>
			/// null or undefined will allow for unlimited selections.
			/// </param>

			// Make sure there is a contentItem
			if (contentItem !== undefined && contentItem._view != null && contentItem._view._container != null) {

				// Make sure we have a properties location
				contentItem.lsWire = contentItem.lsWire || {};
				var lsw = contentItem.lsWire;

				// Setup our properties making it easier to work with selections
				var controlId = contentItem.model.view.id;
				lsw.controlClass = controlId === ":Table" ? ".msls-table tbody" : ".msls-listview";
				lsw.itemTagName = controlId === ":Table" ? "tr" : "li";
				lsw.lsWireSelectedClass = "lswire-selected-item";
				lsw.lsWireSelector = controlId === ":Table" ? "tbody tr.lswire-selected-item" : "ul li.lswire-selected-item";
				lsw.lsSelector = controlId === ":Table" ? "tbody tr.ui-btn-active" : "ul li.ui-btn-active";
				lsw.listView = contentItem._view._container[0].querySelector(lsw.controlClass);

				// Default our passed options
				options = options || {};
				lsw.totalSelectionsAllowed = options.totalSelectionsAllowed || null;

				// Look for an existing persistence setting... create our Id
				lsw.persistId = contentItem.screen.details._modelId + "_Persist" + contentItem.name + "Selections";

				// Do we have one set already?
				if (myapp.options[lsw.persistId] === undefined) {
					myapp.options[lsw.persistId] = options.persistSelections == undefined
						? false
						: options.persistSelections;
				}

				lsw.persistSelections = myapp.options[lsw.persistId];

				// Setup our listener for item taps
				lsw.listView.addEventListener('click', function (event) {

					// Get the container tag
					var itemElement = lsWire.utility.findParentByTagName(event.target, lsw.itemTagName);

					// If no parent match, we are done
					if (itemElement != undefined) {

						// Don't allow default handling
						event.stopPropagation();

						// Execute our own itemTap
						itemTap(contentItem, itemElement);

						// Execute the users itemTap
						if (contentItem._view.underlyingControl.itemTap != undefined)
							contentItem._view.underlyingControl.itemTap.execute();
					};
				});

			}

			// ============================================================================================
			// Internal - Meat of the functionality, pass the list contentItem and tapped item
			// ============================================================================================
			function itemTap(contentItem, item) {

				/// <summary>Enhance a list/table item tap to allow multi-item selection</summary>
				/// <param name="contentItem" type="object">Screen contentItem of the list/table control</param>
				/// <param name="totalSelectionsAllowed" type="integer">Optional<br />
				/// Maximum number of items that can be selected<br />
				/// Defaults to unlimited<br/>
				/// null or undefined will allow for unlimited selections.
				/// </param>

				// Short cut to our properties
				//var lsw = contentItem.lsWire;

				// Get the hook into our data for this item
				var itemData = $.cache[item[$.expando]].data.__entity;

				// If number of selects is multiple, then go!
				if (lsw.totalSelectionsAllowed === null || lsw.totalSelectionsAllowed > 1) {

					// If the selected item already was selected, unselect (nullify) the item
					if (item.classList.contains(lsw.lsWireSelectedClass)) {

						contentItem.screen[contentItem.name].selectedItem = null;
						item.classList.remove(lsw.lsWireSelectedClass);
						item.classList.remove('ui-focus');
						if (lsw.persistSelections)
							itemData.lsWireSelected = false;

					// If the tapped item does not have our custom class showing selected, add it
					} else {

						// Get the current count of selected items if we are showing a limit
						var selectedCount = lsw.totalSelectionsAllowed == undefined
							? 0
							: lsw.listView.querySelectorAll(lsw.lsWireSelector).length;

						// If less than the total allowed add the class
						if (lsw.totalSelectionsAllowed == undefined || selectedCount < lsw.totalSelectionsAllowed) {

							contentItem.screen[contentItem.name].selectedItem = itemData;
							item.classList.add(lsw.lsWireSelectedClass);
							if (lsw.persistSelections)
								itemData.lsWireSelected = true;

							// Already hit the limit, unselect this item
						} else {

							contentItem.screen[contentItem.name].selectedItem = null;
							item.classList.remove('ui-focus');
							if (lsw.persistSelections)
								itemData.lsWireSelected = false;
						}
					}

				// Only 1 selection is allowed, so its more of a toggle, and no we are not going DRY
				} else {

					// If the selected item already was selected, unselect (nullify) the item
					if (item.classList.contains(lsw.lsWireSelectedClass)) {

						contentItem.screen[contentItem.name].selectedItem = null;
						item.classList.remove(lsw.lsWireSelectedClass);
						item.classList.remove('ui-focus');
						if (lsw.persistSelections)
							itemData.lsWireSelected = false;

						// Not selected so remove any previous selection, and add to this one
					} else {

						var prevItem = listView.querySelector(lsw.lsWireSelector);
						if (prevItem !== null) {
							prevItem.classList.remove(lsw.lsWireSelectedClass);
							if (lsw.persistSelections)
								itemData.lsWireSelected = false;
						}

						item.classList.add(lsw.lsWireSelectedClass);
						contentItem.screen[contentItem.name].selectedItem = itemData;
						if (lsw.persistSelections)
							itemData.lsWireSelected = true;
					}
				}


			};


		},

		// ============================================================================================
		// Helper function to reselect an item if it was previously selected
		// ============================================================================================
		reselect: function (contentItem, force) {

			/// <summary>Reselect a previously selected item in a list<br/>
			/// Typically used in the post render of a row, per item</summary>
			/// <param name="contentItem" type="object">contentItem of the actual list/table item</param>
			/// <param name="force" type="boolean">If true, will select the item regardless of its previous state</param>

			// Make sure we have an item and our variables
			if (contentItem !== undefined && contentItem.parent.lsWire !== undefined) {

				// Get our variables
				var lsw = contentItem.parent.lsWire;

				// If we are to persist selections and the item was previously selected
				if ((lsw.persistSelections && contentItem.value.lsWireSelected) || force) {

					// Get the items container
					var item = contentItem._view._container[0];

					// We need the parent when dealing with lists
					if (contentItem.parent.model.view.id !== ":Table")
						item = item.parentElement;

					// Add back our selected class
					item.classList.add(lsw.lsWireSelectedClass);

					// If force was passed and true, make sure we persist
					if (force)
						contentItem.value.lsWireSelected = true;

				};
			};

		},

		// ============================================================================================
		// Helper function to return an array holding the entities of all the selected items
		// ============================================================================================
		selected: function (contentItem) {

			/// <summary>Get all the selected items from a list/table</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the the list/table</param>
			/// <returns type="array">An array of data entities</returns>

			// Array to hold the data
			var data = [];

			if (contentItem != null && contentItem.lsWire !== undefined) {

				var lsw = contentItem.lsWire;

				// Get all the items that have our custom class signifying selection
				var selected = contentItem._view._container[0].querySelectorAll(lsw.lsWireSelector);

				// Go get the entity data for each selected item, add to the data array
				_.forEach(selected, function (item) {

					// Get our data out of the jQuery cache
					var entity = $.cache[item[$.expando]].data.__entity;
					if (entity !== undefined)
						data.push(entity);

				});
			}

			// Return our data array
			return data;

		},

		// ============================================================================================
		// Helper function to select/unselect all items in the list
		// ============================================================================================
		selectAll: function (contentItem, yesNo) {

			/// <summary>Select all items in a list/table if unlimited selections are allowed</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the the list/table</param>
			/// <param name="yesNo" type="boolean">true (default) Select all, false Unselect all</param> 

			if (contentItem != null && contentItem.lsWire !== undefined) {

				var lsw = contentItem.lsWire;

				// Default is to select all, false is passed to unselect
				if (yesNo === undefined || yesNo === true) {

					var allItems = null;

					if (lsw.totalSelectionsAllowed === undefined || lsw.totalSelectionsAllowed === null) {

						// What is the control type... which drives how the items are created
						var selector = contentItem.model.view.id === ":Table"
							? "tbody tr"
							: "ul li";

						// Get the listview container... then query for all items
						allItems = contentItem._view._container[0].querySelectorAll(selector);

						// Add our selected class to all the items
						_.forEach(allItems, function (item) {

							// If the item has not already been selected, add the class
							if (!item.classList.contains(lsw.lsWireSelectedClass)) {
								item.classList.add(lsw.lsWireSelectedClass);
								if (lsw.persistSelections)
									$.cache[item[$.expando]].data.__entity.lsWireSelected = true;

							}
						});
					}
				} else {

					// Get all the items that have our selected class
					allItems = contentItem._view._container[0].querySelectorAll(lsw.lsWireSelector);

					// Loop over them all and remove our class
					_.forEach(allItems, function (item) {
						item.classList.remove(lsw.lsWireSelectedClass);
						item.classList.remove('ui-focus');
						if (lsw.persistSelections)
							$.cache[item[$.expando]].data.__entity.lsWireSelected = false;
					});

					// Nullify the selected item property
					contentItem.screen[contentItem.name].selectedItem = null;
				}

			}
		},

		// ============================================================================================
		// Helper function to get a count of the selected items in a list
		// ============================================================================================
		selectedCount: function (contentItem) {

			/// <summary>Get a count of how many items have been selected</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the the list/table</param>
			/// <returns type="integer">Count of the selected items</returns>

			var count = 0;

			if (contentItem != null && contentItem.lsWire !== undefined) {

				// Get the listview container... allowing independent lists on the same screen
				count = contentItem._view._container[0].querySelectorAll(contentItem.lsWire.lsWireSelector).length;

			}

			return count;

		},

		// ============================================================================================
		// Helper function to set the total number of allowed selections
		// ============================================================================================
		totalSelectionsAllowed: function (contentItem, number) {

			/// <summary>Get/Set the total number of selections allowed</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the list/table</param>
			/// <param name="number" type="integer">Optional<br/>
			/// Number of allowed selctions<br/>
			/// Pass a null or 0 to remove limits, undefined to retrieve</param>
			/// <returns type="integer">Number of selections allowed or null</returns>

			contentItem.lsWire = contentItem.lsWire || {};

			// if no number, just return the value of
			if (number !== undefined) {

				contentItem.lsWire.totalSelectionsAllowed = number === null || number === 0
					? null
					: number;
			}

			// Always return the count
			return contentItem.lsWire.totalSelectionsAllowed || null;
		},

		// ============================================================================================
		// Helper function to set the flag to persist, or not, the selections for this session
		// ============================================================================================
		persistSelections: function (contentItem, persist) {

			/// <summary>Set the flag of whether to persist selections for this session</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the list/table</param>
			/// <param name="persist" type="boolean">Persist selections<br/>
			/// undefined will retrieve the current settings</param>

			contentItem.lsWire = contentItem.lsWire || {};
			var lsw = contentItem.lsWire;

			// What is our id for the cache
			var persistId = contentItem.screen.details._modelId + "_Persist" + contentItem.name + "Selections";

			if (persist !== undefined) {
				if (persist !== myapp.options[persistId]) {
					lsw.persistSelections = persist;
					myapp.options[persistId] = lsw.persistSelections;
					if (lsw.listView !== undefined)
						updateSelected(contentItem, persist);
				}
			}

			// Simple, return any value if exists, undefined if not 
			return myapp.options[persistId];


			// Update all selected items with persist
			function updateSelected(contentItem, persist) {

				var allSelected = lsWire.list.selected(contentItem);

				_.forEach(allSelected, function (item) {
					item.lsWireSelected = persist;
				});

			};


		},

	};

	// ============================================================================================
	// End of:  Functionality to enhance a ListView/TileView/TableView for multiple selects
	// ============================================================================================


	window.lsWire.checkbox = {

		// ============================================================================================
		// Render/initialize a LS Custom Control to be a checkbox
		// ============================================================================================
		render: function (element, contentItem, options) {

			/// <summary>Render a custom control as a checkbox</summary>
			/// <param name="element" type="object">Element of the custom control</param>
			/// <param name="contentItem" type="object">Screen contentItem of the custom control</param>
			/// <param name="options" type="object">Optional<br/>
			/// Options that can be set for the checkbox:<br/>
			///  {<br/>text: Text you want to display to the right of the checkbox<br/>
			/// textCssClass: CSS class you want to have the text displayed as<br/>
			/// cssClass: Parent CSS class you want for the checkbox<br/>
			/// onChange: UDF for when the control is clicked<br/>
			/// initialValue: boolean<br/>}<br/><br/>
			/// UDF gets passed 2 parameters: isChecked and the eventObect
			///</param>


			// Make a spot for our data
			contentItem.lsWire = contentItem.lsWire || {};
			contentItem.lsWire.checkbox = contentItem.lsWire.checkbox || {};

			// Shortcut to our data in the contentItem
			var ckBox = contentItem.lsWire.checkbox;

			// Stuff the passed options into our contentItem properties
			options = options || {};
			ckBox.cssClass = options.cssClass || "lswire-checkbox";
			ckBox.checkedCssClassForText = options.checkedCssClassForText;
			ckBox.uncheckedCssClassForText = options.uncheckedCssClassForText;
			ckBox.text = options.text;

			// Set the default value for the checkbox
			if (options.initialValue !== undefined) contentItem.value = options.initialValue;

			// Make sure we have a default change handler, we pass a boolean for checked/unchecked
			ckBox.onChange = options.onChange || function (isChecked) {
				contentItem.value = isChecked;
			};

			// Create a unique ID for our control, we don't consistently know the pageId until later, so we can't use that
			ckBox.controlId = contentItem.screen.details._modelId + "-" + contentItem.name;

			// We use the following to create our accompaning label/text, if any
			// 1. text property in passed options takes priority, pass an empty string for no label
			// 2. if no text property, look at the description field of the contentItem
			// 3. if no description text, use displayName, only if label position is None
			if (ckBox.text === undefined) {
				if (contentItem.description == undefined) {
					ckBox.text = contentItem.properties.attachedLabelPosition == "None" ? contentItem.displayName : "";
				} else {
					ckBox.text = contentItem.description;
				}
			}

			// Make sure we're all trimmed up
			ckBox.text = ckBox.text.trim();

			// Create the HTML for the Wrapper, Input and Label controls
			var $container = $('<div class="msls-clear msls-vauto">');
			var $checkBoxInput = $('<input type="checkbox" id="' + ckBox.controlId + '" />');
			var $label = $('<label for="' + ckBox.controlId + '">' + ckBox.text + '</label>');

			// Add our checkbox and label to the container, then the container to the element
			$checkBoxInput.appendTo($container);
			$label.appendTo($container);
			$container.appendTo(element);

			// Add the passed cssClass to the parent, else we use the default
			if (ckBox.cssClass) $(element).addClass(ckBox.cssClass);

			// if there is no text to display, tell the parent, make sure there is a space for the label, for sizing
			if (ckBox.text == "") {
				$label[0].innerHTML = "&nbsp;";
				$(element).addClass("noLabelCheckbox");
			}

			// Make sure our events don't bubble up
			$checkBoxInput.on('click', function (eventObj) {
				eventObj.stopPropagation();
			});

			// This caused issues
			$label.on('click', function (eventObj) {
				//eventObj.stopPropagation();
			});

			// Add the UDF to the change event of the checkbox, passed values: checked or not, event obj
			$checkBoxInput.change(function (eventObj) {
				ckBox.onChange($checkBoxInput[0].checked, eventObj);
			});

			// Now lets add the container to our contentItem for the ability to reference later
			ckBox.container = $container;


			// ============================================================================================
			// Make sure our styles get applied before the page is shown
			// ============================================================================================
			$(document).one('pagebeforeshow', function () {
				lsWire.checkbox.updateTextCssClasses(contentItem);
			});


			// ============================================================================================
			// Lets do a dataBind so the UI gets updated if underlying value changes
			// ============================================================================================
			contentItem.dataBind("value", function (isChecked) {

				// Stuff our HTML input control with the new value
				$checkBoxInput[0].checked = isChecked;

				// Make sure the control has been rendered, then refresh the UI
				if (contentItem._view.isRendered) {
					$checkBoxInput.checkboxradio("refresh");
					lsWire.checkbox.updateTextCssClasses(contentItem);
				}

			});

		},


		// ============================================================================================
		// Helper function to update the classes of our label/text
		// ============================================================================================
		updateTextCssClasses: function (contentItem) {

			/// <summary>Change/Update the CSS class for the checkbox text</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the custom control</param>

			// Shortcut to our data in the contentItem
			var ckBox = contentItem.lsWire.checkbox;

			// Do we have our text element, if not go find it, once
			if (ckBox.btnTextElement == undefined)
				ckBox.btnTextElement = $(ckBox.container).parent().find(".ui-btn-text");

			// Update the text css as defined previously
			if (contentItem.value) {
				$(ckBox.btnTextElement).removeClass(ckBox.uncheckedCssClassForText);
				$(ckBox.btnTextElement).addClass(ckBox.checkedCssClassForText);
			} else {
				$(ckBox.btnTextElement).removeClass(ckBox.checkedCssClassForText);
				$(ckBox.btnTextElement).addClass(ckBox.uncheckedCssClassForText);
			}

		},


		// ============================================================================================
		// Helper function to change the text of the control, optional css classes to add/remove
		// ============================================================================================
		setText: function (contentItem, text, classToAdd, classToRemove) {

			/// <summary>Change the text and CSS Class of the checkbox</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the custom control</param>
			/// <param name="text" type="string">Text you want to display</param>
			/// <param name="classToAdd" type="string">Optional<br/>
			/// CSS class to add for the text</param>
			/// <param name="classToRemove" type="string">Optional<br/>
			/// CSS class to remove from the text</param>


			// Shortcut to our data
			var ckBox = contentItem.lsWire.checkbox;

			// Do we have our text element, if not go find it, once
			if (ckBox.btnTextElement == undefined)
				ckBox.btnTextElement = $(ckBox.container).parent().find(".ui-btn-text");

			if (ckBox.btnTextElement.length > 0) {
				ckBox.btnTextElement[0].innerHTML = text;

				if (classToRemove)
					$(ckBox.btnTextElement).removeClass(classToRemove);

				if (classToAdd)
					$(ckBox.btnTextElement).addClass(classToAdd);
			}
		},


		// ============================================================================================
		// Helper function to add a css class for the text of the control
		// ============================================================================================
		addCssClassForText: function (contentItem, cssClass) {

			/// <summary>Add a CSS class for the text</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the custom control</param>
			/// <param name="cssClass" type="string">CSS class name</param>


			// Shortcut to our data
			var ckBox = contentItem.lsWire.checkbox;

			// Do we have our text element, if not go find it, once
			if (ckBox.btnTextElement == undefined)
				ckBox.btnTextElement = $(ckBox.container).parent().find(".ui-btn-text");

			if (ckBox.btnTextElement.length > 0)
				$(ckBox.btnTextElement).addClass(cssClass);

		},


		// ============================================================================================
		// Helper function to remove a css class for the text of the control
		// ============================================================================================
		removeCssClassForText: function (contentItem, cssClass) {

			/// <summary>Remove a CSS class from the text</summary>
			/// <param name="contentItem" type="object">Screen contentItem of the custom control</param>
			/// <param name="cssClass" type="string">CSS class name</param>

			// Shortcut to our data
			var ckBox = contentItem.lsWire.checkbox;

			// Do we have our text element, if not go find it, once
			if (ckBox.btnTextElement == undefined)
				ckBox.btnTextElement = $(ckBox.container).parent().find(".ui-btn-text");

			if (ckBox.btnTextElement.length > 0)
				$(ckBox.btnTextElement).removeClass(cssClass);

		},


		// ============================================================================================
		// Helper function to initialize a checkbox elements styles, we have to wait for all to be rendered
		// ============================================================================================
		initializeCss: function (element, css) {

			/// <summary>Initializes the checkbox styles</summary>
			/// <param name="element" type="object">Element of the checkbox custom control</param>
			/// <param name="css" type="string">CSS values (not classes) to be applied</param>


			$(document).one('pagebeforeshow', function () {
				$("div", element).css(css);
			});

		}


	};


	window.lsWire.layout = {

		// ============================================================================================
		// Helper function to render the header of a layout control
		// ============================================================================================
		renderHeader: function (element, contentItem, cssClass) {

			/// <summary>Render a header for a layout control</summary
			/// <param name="element" type="object">Element of the layout control</param>
			/// <param name="contentItem" type="object">Screen contentItem of the layout control</param>
			/// <param name="cssClass" type="string">Optional<br/>
			/// CSS Class for the header text<br/>
			/// Defaults to msls-control-header
			/// </param>

			cssClass = cssClass || "msls-control-header";

			var showLabel = contentItem.properties.attachedLabelPosition;

			if (showLabel !== "Hidden" && showLabel !== "None") 
				$(element).prepend($("<div style='margin-left: 10px;' class='" + cssClass + "'>" + contentItem.displayName  +"</div>"));
		}

	};


	window.lsWire.utility = {

		// ============================================================================================
		// Helper function find the parent that matches a tag name
		// ============================================================================================
		findParentByTagName: function (element, tagName) {

			/// <summary>Find the parent of an element that matches a tag name</summary>
			/// <param name="element" type="object">DOM Element</param>
			/// <param name="tagName" type="string">Tag name to locate</param>
			/// <returns type="object">DOM element or null if not found</returns>

			var foundElement = element;
			tagName = tagName.toUpperCase();

			while (foundElement && foundElement.tagName !== tagName) {
				foundElement = foundElement.parentElement;
			}

			return foundElement;

		},


		// ============================================================================================
		// Helper function find the parent that matches a class name
		// ============================================================================================
		findParentByClassName: function (element, className) {

			/// <summary>Find the parent of an element that matches a class name</summary>
			/// <param name="element" type="object">DOM Element</param>
			/// <param name="className" type="string">Class name to locate</param>
			/// <returns type="object">DOM element or null if not found</returns>

			var foundElement = element;
			tagName = tagName.toUpperCase();

			while (foundElement && !foundElement.classList.contains(className)) {
				foundElement = foundElement.parentElement;
			}

			return foundElement;

		},


		// ============================================================================================
		// Helper function to create an msls property.  Allows for programmatic dataBinding
		// ============================================================================================
		createProperty: function (name, location, initialValue) {

			/// <summary>Create a property object</summary>
			/// <param name="name" type="string">Name for the property</param>
			/// <param name="location" type="string">Where you want the property to be stored</param>
			/// <param name="initialValue" type="object">Initial value to give the property</param>
			/// <returns type="object">Pointer to the property location</returns>

			if (name === undefined || name === "") return null;

			location = location || myapp.options;

			location[name] = new msls.ContentItem('Value');

			if (initialValue !== undefined)
				location[name].value = initialValue;

			return location[name];
		}
	}


}());

