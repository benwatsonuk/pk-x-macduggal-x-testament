// Override Settings
var boostPFSFilterConfig = {
	general: {
		limit: boostPFSConfig.custom.products_per_page,
		// Optional
		loadProductFirst: true,
	},
	selector: {
		products: '.product-loop'
	}
};

var boostPFSTemplate = {
	'saleLabelHtml': '<div class="sale-item icn">' + boostPFSConfig.label.sale + '</div>',
	'soldOutLabelHtml': '<div class="so icn">' + boostPFSConfig.label.sold_out + '</div>',
	'newLabelHtml': '<div class="new icn">' + boostPFSConfig.label.new + '</div>',
	'vendorHtml': '<h4>{{itemVendorLabel}}<h4>',
	'quickViewHtml': '<button class="quick-view-{{itemId}} product-listing__quickview-trigger js-modal-open js-quickview-trigger" type="button" name="button" data-wau-modal-target="quickview" data-product-url="{{itemUrl}}?view=quick">' + boostPFSConfig.label.quick_view + '</button>',

	'productGridItemHtml':  '<div id="product-listing-{{itemId}}" class="collection__page-product product-index js-product-listing" data-alpha="{{itemTitle}}" data-price="{{itemPriceNumber}}">' +
								'<div class="product-index-inner">' +
									'{{itemNewLabel}}' +
									'{{itemSaleLabel}}' +
									'{{itemSoldoutLabel}}' +
								'</div>' +
								'<div class="js-product-image animated prod-image image_' + boostPFSConfig.custom.product_image_size + '">' +
									'<a href="{{itemUrl}}" title="{{itemTitle}}">' +
										'<div class="reveal">' +
											'{{itemImages}}' +
										'</div>' +
									'</a>' +
									'{{itemQuickView}}' +
								'</div>' +
								'<div class="product-info">' +
									'<div class="product-info-inner">' +
										'<a href="{{itemUrl}}">' +
											'{{itemVendor}}' +
											'<span class="prod-title">{{itemTitle}}</span>' +
											'{{itemReviews}}' +
										'</a>' +
										'<div class="price">{{itemPrice}}</div>' +
										'{{itemSwatch}}' +
									'</div>' +
								'</div>' +
							'</div>',

	// Pagination Template
	'previousHtml': '<div class="pagiprev"><a href="{{itemUrl}}" title=""><i class="fa fa-caret-left"></i></a></div>',
	'nextHtml': '<div class="paginext"><a href="{{itemUrl}}" title=""><i class="fa fa-caret-right"></i></a></div>',
	'pageItemHtml': '<a href="{{itemUrl}}" title="">{{itemTitle}}</a>',
	'pageItemSelectedHtml': '<span class="current">{{itemTitle}}</span>',
	'pageItemRemainHtml': '{{itemTitle}}',
	'paginateHtml': '{{previous}}{{pageItems}}{{next}}',
	'paginateTopHtml': '{{previous}} <span class="pagination-count"></span> {{next}}',

	// Sorting Template
	'sortingHtml': '<select aria-label="Sort by" class="styled-select">{{sortingItems}}</select>',
};

(function() {
	BoostPFS.inject(this);

	ProductGridItem.prototype.compileTemplate = function(data, index, totalProduct) {
		if (!data) data = this.data;
		if (!index) index = this.index;
		if (!totalProduct) totalProduct = this.totalProduct;

		/*** Prepare data ***/
		var images = data.images_info;
		// Displaying price base on the policy of Shopify, have to multiple by 100
		var soldOut = !data.available; // Check a product is out of stock
		var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
		var priceVaries = data.price_min != data.price_max; // Check a product has many prices
		// Get First Variant (selected_or_first_available_variant)
		var firstVariant = data['variants'][0];
		if (Utils.getParam('variant') !== null && Utils.getParam('variant') != '') {
			var paramVariant = data.variants.filter(function(e) { return e.id == Utils.getParam('variant'); });
			if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
		} else {
			for (var i = 0; i < data['variants'].length; i++) {
				if (data['variants'][i].available) {
					firstVariant = data['variants'][i];
					break;
				}
			}
		}
		/*** End Prepare data ***/

		// Get Template
		var itemHtml = boostPFSTemplate.productGridItemHtml;

		// Add itemGridWidthClass
		var itemGridWidthClass = '';
		var productsPerRow = boostPFSConfig.custom.products_per_row;
		switch (productsPerRow) {
			case 6:
				itemGridWidthClass = buildItemGridClass('desktop-2', index, productsPerRow);
				break;
			case 4:
				itemGridWidthClass = buildItemGridClass('desktop-3', index, productsPerRow);
				break;
			case 3:
				itemGridWidthClass = buildItemGridClass('desktop-4', index, productsPerRow);
				break;
			case 5:
				itemGridWidthClass = buildItemGridClass('desktop-fifth', index, productsPerRow);
				break;
			case 2:
				itemGridWidthClass = buildItemGridClass('desktop-6', index, productsPerRow);
				break;
			default:
				break;
		}
		itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

		// Add Label
		var itemNewLabelHtml = '';
		var itemSaleLabelHtml = '';
		var itemSoldoutLabelHtml = '';
		if (!soldOut) {
			for (var k in data.collections) {
				if (data['collections'][k]['handle'] == 'new') {
					itemNewLabelHtml = boostPFSTemplate.newLabelHtml;
					break;
				}
			}
			if (onSale) {
				itemSaleLabelHtml = boostPFSTemplate.saleLabelHtml.replace(/{{itemOldPrice}}/g, Utils.formatMoney(data.price_min, Globals.moneyFormat));
			}
		} else {
			itemSoldoutLabelHtml = boostPFSTemplate.soldOutLabelHtml;
		}
		itemHtml = itemHtml.replace(/{{itemNewLabel}}/g, itemNewLabelHtml);
		itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);
		itemHtml = itemHtml.replace(/{{itemSoldoutLabel}}/g, itemSoldoutLabelHtml);

		// Add Vendor
		var itemVendorHtml = boostPFSConfig.custom.vendor_enable ? boostPFSTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
		itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

		// Add price
		var itemPriceHtml = '';
		if (onSale) {
			itemPriceHtml += '<div class="onsale">' + Utils.formatMoney(data.price_min, Globals.moneyFormat) + '</div>';
			itemPriceHtml += '<div class="was">' + Utils.formatMoney(data.compare_at_price_min, Globals.moneyFormat) + '</div>';
		} else {
			itemPriceHtml += '<div class="prod-price">';
			if (priceVaries) {
				itemPriceHtml += boostPFSConfig.label.from_price + ' ' + Utils.formatMoney(data.price_min, Globals.moneyFormat) + ' - ' + Utils.formatMoney(data.price_max, Globals.moneyFormat);
			} else {
				itemPriceHtml += Utils.formatMoney(data.price_min, Globals.moneyFormat);
			}
			itemPriceHtml += '</div>';
		}
		itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

		// Add itemImages
		var itemImagesHtml = '';
		var itemThumbUrl = images.length > 0 ? Utils.optimizeImage(images[0]['src'], '500x') : boostPFSConfig.general.no_image_url;
		if (images.length > 0) {
			var aspect_ratio = images[0]['height'] / images[0]['width'] * 100;
			var firstImageCLass = (images.length > 0 && boostPFSConfig.custom.secondary_images_hover == 'image-flip') ? 'first-image' : '';
			itemImagesHtml += '<div class="box-ratio" style="padding-bottom: ' + aspect_ratio + '%;">' +
				'<img class="lazyload lazyload-fade ' + firstImageCLass + '"' +
				'data-src="' + Utils.optimizeImage(images[0]['src'], '{width}x') + '"' +
				'data-sizes="auto"' +
				'data-original="' + itemThumbUrl + '"' +
				'data-width="[180, 360, 540, 720]"' +
				'alt="{{itemTitle}}">' +
				'</div>' +
				'<noscript>' +
				'<img src="' + Utils.optimizeImage(images[0]['src'], '1024x') + '" alt="{{itemTitle}}">' +
				'</noscript>';
			if (boostPFSConfig.custom.secondary_images_hover == 'image_flip' && images.length > 1) {
				var aspect_ratio1 = images[1]['height'] / images[1]['width'] * 100;
				itemImagesHtml += '<div class="hidden">' +
					'<div class="box-ratio" style="padding-bottom: ' + aspect_ratio1 + '%;">' +
					'<img class="lazyload lazyload-fade"' +
					'data-src="' + Utils.optimizeImage(images[1]['src'], '{width}x') + '"' +
					'data-sizes="auto"' +
					'data-original="' + itemThumbUrl + '"' +
					'alt="{{itemTitle}}">' +
					'</div>' +
					'<noscript>' +
					'<img src="' + Utils.optimizeImage(images[1]['src'], '1024x') + '" alt="{{itemTitle}}">' +
					'</noscript>' +
					'</div>';
			}
		} else {
			itemImagesHtml += boostPFSConfig.custom.product1_url;
		}

		itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

		// Add Quick view
		var itemQuickViewHtml = boostPFSConfig.custom.quick_view_enable ? boostPFSTemplate.quickViewHtml : '';
		itemHtml = itemHtml.replace(/{{itemQuickView}}/g, itemQuickViewHtml);

		// Add Swatches
		var itemSwatchHtml = '';
		if (boostPFSConfig.custom.secondary_images_hover == 'alternate_colors' && images.length > 1) {
			for (var k = 0; k < data.options_with_values.length; k++) {
				var option = data['options_with_values'][k]['name'];
				var option_handle = Utils.slugify(option);
				var option_index = k;

				var is_color = false;
				var downcased_option = option.toLowerCase();
				if (downcased_option.indexOf('color') > -1 || downcased_option.indexOf('colour') > -1) {
					itemSwatchHtml += '<div class="col-swatch">'
					itemSwatchHtml += '<ul data-option-index="' + option_index + '" class="' + option_handle + ' options">';
					var values = '';
					var optionValues = data['options_with_values'][k]['values'];
					for (var i = 0; i < optionValues.length; i++) {
						var value = optionValues[i]['title'];
						var wrapped_value = ',' + value + ',';
						if (values.indexOf(wrapped_value) == -1) {
							var variantImage = "";
							if (optionValues[i]['image'] != null) {
								var imageIndex = optionValues[i]['image'];
								if (typeof(images[imageIndex - 1]) !== 'undefined') {
									variantImage = Utils.optimizeImage(images[imageIndex - 1]['src']);
								}
							}
							var fileColorUrl = boostPFSConfig.general.asset_url.replace('boost-pfs-filter.js', Utils.slugify(value) + '.png');
							itemSwatchHtml += '<li data-option-title="' + value + '" data-href="' + variantImage + '" class="color ' + Utils.slugify(value) + '">';
							itemSwatchHtml += '<span style="background-color: ' + Utils.slugify(value.split(' ').pop()) + '; background-image: url(' + fileColorUrl + ')"></span>';
							itemSwatchHtml == '</li>';
							values += values + wrapped_value;
						}
					}
					itemSwatchHtml += '</ul>';
					itemSwatchHtml += '</div>';
				}
			}

			itemSwatchHtml += '<script>' +
				"$('#product-listing-{{itemId}} .col-swatch li').each(function(){" +
				"var Original = $('#product-listing-{{itemId}} .prod-image img').attr('data-original'); " +
				"$(this).hover(function() {" +
				"var newImage = $(this).attr('data-href');" +
				"if (newImage){" +
				"$( '#product-listing-{{itemId}} .prod-image img' ).attr({ srcset: newImage }); " +
				"}" +
				"return false;" +
				"}, function(){" +
				"$('#product-listing-{{itemId}} .prod-image img' ).attr({ srcset: Original }); " +
				"});" +
				"});" +
				'</script>';
		}
		itemHtml = itemHtml.replace(/{{itemSwatch}}/g, itemSwatchHtml);

		// Add Reviews
		if (typeof Integration === 'undefined' || !Integration.hascompileTemplate('reviews')) {
			itemHtml = itemHtml.replace(/{{itemReviews}}/g, '');
		}

		// Add main attribute
		itemHtml = itemHtml.replace(/{{itemPriceNumber}}/g, data.price_min);
		itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
		itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
		itemHtml = itemHtml.replace(/{{firstVariantId}}/g, firstVariant.id);
		itemHtml = itemHtml.replace(/{{itemUrl}}/g, Utils.buildProductItemUrl(data, false));

		return itemHtml;
	}

	function buildItemGridClass(itemClass, index, productsPerRow) {
		if (index > 0) {
			if (index % productsPerRow == productsPerRow - 1) {
				itemClass += ' last';
			} else {
				if (index % productsPerRow == 0) {
					itemClass += ' first';
				} else {
					itemClass += '';
				}
			}
			return itemClass;
		} else {
			itemClass += ' first';
			return itemClass;
		}
	}

	// Build Pagination
	ProductPaginationDefault.prototype.compileTemplate = function(totalProduct) {
		if (!totalProduct) totalProduct = this.totalProduct;

		// Get page info
		var currentPage = parseInt(Globals.queryParams.page);
		var totalPage = Math.ceil(totalProduct / Globals.queryParams.limit);

		if (totalPage !== 1) {
			var paginationHtml = boostPFSTemplate.paginateHtml;

			// Build Previous
			var previousHtml = (currentPage > 1) ? boostPFSTemplate.previousHtml : '';
			previousHtml = previousHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage - 1));
			paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

			// Build Next
			var nextHtml = (currentPage < totalPage) ? boostPFSTemplate.nextHtml : '';
			nextHtml = nextHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, currentPage + 1));
			paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

			// Create page items array
			var beforeCurrentPageArr = [];
			for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
				beforeCurrentPageArr.unshift(iBefore);
			}
			if (currentPage - 4 > 0) {
				beforeCurrentPageArr.unshift('...');
			}
			if (currentPage - 4 >= 0) {
				beforeCurrentPageArr.unshift(1);
			}
			beforeCurrentPageArr.push(currentPage);

			var afterCurrentPageArr = [];
			for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
				afterCurrentPageArr.push(iAfter);
			}
			if (currentPage + 3 < totalPage) {
				afterCurrentPageArr.push('...');
			}
			if (currentPage + 3 <= totalPage) {
				afterCurrentPageArr.push(totalPage);
			}

			// Build page items
			var pageItemsHtml = '';
			var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
			for (var iPage = 0; iPage < pageArr.length; iPage++) {
				if (pageArr[iPage] == '...') {
					pageItemsHtml += boostPFSTemplate.pageItemRemainHtml;
				} else {
					pageItemsHtml += (pageArr[iPage] == currentPage) ? boostPFSTemplate.pageItemSelectedHtml : boostPFSTemplate.pageItemHtml;
				}
				pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
				pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, Utils.buildToolbarLink('page', currentPage, pageArr[iPage]));
			}
			paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
			return paginationHtml;
		}

		return '';
	};

	// Build Sorting
	ProductSorting.prototype.compileTemplate = function() {
		var html = '';
		if (boostPFSTemplate.hasOwnProperty('sortingHtml')) {
			var sortingArr = Utils.getSortingList();
			if (sortingArr) {
				// Build content 
				var sortingItemsHtml = '';
				for (var k in sortingArr) {
					sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
				}
				var html = boostPFSTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
			}
		}
		return html;
	};

	// Add additional feature for product list, used commonly in customizing product list
	ProductList.prototype.afterRender = function(data, eventType) {
		Shopify.theme.quickview.init();
		var sections = new theme.Sections();
		sections.register('collection-section', theme.Collection);
		//sections.register('product__section', theme.Product);
	};

	// Build additional elements
	FilterResult.prototype.afterRender = function(data) {
		if (!data) data = this.data;

		// Build Total Products
		if (Settings.getSettingValue('general.paginationType') == 'default') {
			var from = Globals.queryParams.page == 1 ? Globals.queryParams.page : (Globals.queryParams.page - 1) * Globals.queryParams.limit + 1;
			var to = from + data.products.length - 1;
			jQ('#pagination').find('.count').html(boostPFSConfig.label.showing_items + ' ' + from + '-' + to + ' ' + boostPFSConfig.label.pagination_of + ' ' + data.total_product);

			// Build Top Pagination info
			var currentPage = parseInt(Globals.queryParams.page);
			var totalPage = Math.ceil(data.total_product / Globals.queryParams.limit);
			jQ('.boost-pfs-filter-top-pagination').find('.pagination-count').html(currentPage + ' ' + boostPFSConfig.label.pagination_of + ' ' + totalPage + ' ');
		} else {
			jQ('#pagination .count').hide();
			jQ('#pagination .clear').hide();
			jQ('.boost-pfs-filter-top-pagination').hide();
		}
	};

})();