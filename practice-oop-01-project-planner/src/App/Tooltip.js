import Component, {doSomething} from './Component';

export class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
    this.closeTooltip = () => {
      this.detach();
      this.closeNotifier();
    };
  }

  

  create() {
    const toolTipElement = document.createElement('div');
    toolTipElement.className = 'card';
    const toolTipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(toolTipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    toolTipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElScrolling - 10;

    toolTipElement.style.position = 'absolute';
    toolTipElement.style.left = x + 'px';
    toolTipElement.style.top = y + 'px';

    toolTipElement.addEventListener('click', this.closeTooltip);
    this.element = toolTipElement;
  }
}