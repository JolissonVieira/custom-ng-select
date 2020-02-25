import { Component, OnInit, Input, Attribute, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EmitterVisitorContext } from '@angular/compiler';

const INPUT_FIELD_VALUES_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CipiSelectComponent),
  multi: true
}

@Component({
  selector: 'cipi-select',
  templateUrl: './cipi-select.component.html',
  styleUrls: ['./cipi-select.component.scss'],
  providers: [INPUT_FIELD_VALUES_ACCESSOR]
})
export class CipiSelectComponent implements  ControlValueAccessor {

  @Input() id: string;
  @Input() items: Array<any>;
  @Input() atributo: string;
  @Input() placeholder: string;
  @Input() selecaoMultipla = false;
  @Input() desabilitado = false;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @Output() onClear: EventEmitter<any> = new EventEmitter();

  public innerValue: any;

  get value() {
    return this.innerValue;
  }

  onChangeCb: (_: any) => void = () => { };
  onTouchedCb: () => void = () => { };

  writeValue(obj: any): void {
    this.innerValue = obj;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.desabilitado = isDisabled;
  }

  onInnerChange($event: Event) {
    this.onChangeCb($event);
    this.onTouchedCb();
    return this.onChange.emit($event);
  }

  onInnerFocus($event: Event) {
    return this.onFocus.emit();
  }

  onInnerBlur($event: Event) {
    return this.onBlur.emit();
  }

  onInnerOpen() {
    return this.onOpen.emit();
  }

  onInnerClose() {
    this.onTouchedCb();
    return this.onClose.emit();
  }

  onInnerAdd($event: Event) {
    return this.onAdd.emit($event);
  }

  onInnerRemove($event: Event) {
    return this.onRemove.emit();
  }

  onInnerClear() {
    return this.onClear.emit();
  }
}
