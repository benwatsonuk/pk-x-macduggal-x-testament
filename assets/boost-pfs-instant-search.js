// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		//suggestionMode: 'test',
		//suggestionPosition: 'left'
	}
};

(function() {
	BoostPFS.inject(this);

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function(suggestionElement, searchElement, searchBoxId) {
		if (!suggestionElement) suggestionElement = this.suggestionElement;
		if (!searchElement) searchElement = this.searchElement;
		if (!searchBoxId) searchBoxId = this.searchBoxId;

		if (jQ('.fancybox-overlay').length > 0) {
			jQ(suggestionElement).parent().css({
				'position': 'fixed',
			});
			jQ(suggestionElement).css({
				'overflow-y': 'scroll',
				'height': '300px'
			});
		}
	};

})();