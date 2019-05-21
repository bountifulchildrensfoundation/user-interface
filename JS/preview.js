/* 
We need to select the panel elements we'll work ith(querySelectorAll)
Write a clas to encapsulate the logic
*/

class Panel {
  constructor(panel) {
    // get access to button and anything else we need to store on 'this'
    this.panel = panel
    // this.toggleButton = panel.querySelector('button')
    this.toggleOpen = panel.querySelector('button.panel-btn-open')
    this.toggleClose = panel.querySelector('button.panel-btn-close')
    this.content = panel.querySelector('.panel-content')
    // this.togglePanel = this.togglePanel.bind(this)
    this.toggleOpen.addEventListener('click', () => this.togglePanel())
    this.toggleClose.addEventListener('click', () => this.togglePanel())
    // console.log('Creating panel', panel, this.toggleButton)
  }
  togglePanel() {
    this.content.classList.toggle('toggle-on')
    this.toggleOpen.classList.toggle('hide-btn')
    this.toggleClose.classList.toggle('hide-btn')
    // this.content.classList.contains('toggle-on') ? this.toggleButton.textContent = 'Close' :       this.toggleButton.textContent = 'Open';
  }
  
}

const panels = Array.from(document.querySelectorAll('.panel'))
// const panels = document.querySelectorAll('.panel')

// =panels.forEach(panel => {
//   const panelInstance = new Panel(panel)
// })
panels.forEach(panel => {
  const panelInstance = new Panel(panel)
})