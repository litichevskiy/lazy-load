const DEFAULT_OPTIONS = {
  rootMargin: '0px',
  threshold: [0]
};

const OBSERVED_SELECTOR = 'lazy';
const OBSERVED_SELECTOR_LOADED = 'lazy-loaded';

class LazyLoad {
  constructor( options = {}, selector = OBSERVED_SELECTOR ) {
    this.observer = this._init( options );
    this.selector = selector;
    this.root = options.root || document;

    this.update();
  }

  _init( options ) {
    return new IntersectionObserver( this._observe, {...DEFAULT_OPTIONS, ...options });
  }

  _observe = ( entries, observer ) => {
    entries.forEach(({ isIntersecting, target }) => {
      if( isIntersecting ) {
        this.observer.unobserve( target );
        target.src = target.getAttribute('data-src');
        target.classList.remove( this.selector );
        target.classList.add( OBSERVED_SELECTOR_LOADED );
      }
    });
  }

  _setObserve( list ) {
    list.forEach( item => this.observer.observe( item ))
  }

  update() {
    const observables = this.root.querySelectorAll(`.${this.selector}:not(.${OBSERVED_SELECTOR_LOADED})`);
    this._setObserve( observables );
  }

  destroy() {
    this.observer.disconnect();
    delete this.observer;
    if( this.root instanceof HTMLElement ) this.root = null;
  }
};

export default LazyLoad;