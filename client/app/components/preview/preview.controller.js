import _ from 'lodash';

class PreviewController {
  constructor($location, $anchorScroll) {
    this.isOpen = false
    this.$location = $location
    this.$anchorScroll = $anchorScroll
  }

  open(id) {
    this.isOpen=!this.isOpen
    this.$location.hash(id);
    this.scroll()
    if(this.isOpen)this.$anchorScroll();
  }
}

PreviewController.$inject = ['$location', '$anchorScroll'];

export {PreviewController};