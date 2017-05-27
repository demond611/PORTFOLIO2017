import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {

	constructor(){
		this.siteHeaderButton = $(".site-header__btn-container > a");
		this.siteHeader = $(".site-header");
		this.headerTrigger = $(".large-hero__subtitle");
		this.createHeaderWaypoint();
	}

	createHeaderWaypoint(){
		var that = this;
		new Waypoint({
			element: this.headerTrigger[0],
			handler: function(direction){
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
					that.siteHeaderButton.addClass("btn--orange");
				} else {
					that.siteHeader.removeClass("site-header--dark");
					that.siteHeaderButton.removeClass("btn--orange");
				}
			}
		});
	}

}

export default StickyHeader;