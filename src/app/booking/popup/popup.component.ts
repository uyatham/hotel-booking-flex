import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  element: ElementRef;
  focusedElementBeforeModal;
  firstTabStop;
  lastTabStop;

  focusableElementsString = `a[href], area[href], input:not([disabled]), select:not([disabled]),
   textarea:not([disabled]), button:not([disabled]), iframe,
   object, embed, [tabindex="0"], [contenteditable]`;

  @ViewChild('popUp') popUp: ElementRef;
  @ViewChild('modelOverlay') modelOverlay: ElementRef;

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent): void {
    if (event.keyCode === 9) {
      if (event.shiftKey) {
        if (document.activeElement === this.firstTabStop) {
          event.preventDefault();
          this.lastTabStop.focus();
        }
      } else {
        if (document.activeElement === this.lastTabStop) {
          console.log('hello');
          event.preventDefault();
          this.firstTabStop.focus();
        }
      }
    }

    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  constructor(private el: ElementRef) {
    this.element = el;
  }

  ngOnInit(): void {
    let focusableElements = this.element.nativeElement.querySelectorAll(
      this.focusableElementsString
    );
    focusableElements = Array.prototype.slice.call(focusableElements);
    this.firstTabStop = focusableElements[0];
    this.lastTabStop = focusableElements[focusableElements.length - 1];
  }

  openModal(element): void {
    this.focusedElementBeforeModal = element;
    this.popUp.nativeElement.style.display = 'block';
    this.modelOverlay.nativeElement.style.display = 'block';
    this.firstTabStop.focus();
  }

  closeModal(): void {
    this.popUp.nativeElement.style.display = 'none';
    this.modelOverlay.nativeElement.style.display = 'none';
    this.focusedElementBeforeModal.target.focus();
  }
}
