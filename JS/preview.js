class Panel {
  constructor(panel) {
    // get access to button and anything else we need to store on 'this'
    this.panel = panel
    
    this.toggleOpen = panel.querySelector('button.panel-btn-open')
    this.toggleClose = panel.querySelector('button.panel-btn-close')
    this.content = panel.querySelector('.panel-content')
    
    this.toggleOpen.addEventListener('click', () => this.togglePanel())
    this.toggleClose.addEventListener('click', () => this.togglePanel())
    
  }
  togglePanel() {
    this.content.classList.toggle('toggle-on')
    this.toggleOpen.classList.toggle('hide-btn')
    this.toggleClose.classList.toggle('hide-btn')
    
  }
  
}

const panels = Array.from(document.querySelectorAll('.panel'))

panels.forEach(panel => {
  const panelInstance = new Panel(panel)
})