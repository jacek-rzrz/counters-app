import { click } from './click';

export class AppTestView {

    constructor(screen) {
        this.screen = screen;
    }

    getCounterValue() {
        return this.screen.find('[data-qa="counter-value"]');
    }

    clickIncrementCounter() {
        const button = this.screen.find('[data-qa="counter-value-inc"]');
        click(button);
    }

    clickDecrementCounter() {
        const button = this.screen.find('[data-qa="counter-value-dec"]');
        click(button);
    }

    clickResetCounter() {
        const button = this.screen.find('[data-qa="counter-value-reset"]');
        click(button);
    }

}
