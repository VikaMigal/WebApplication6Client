import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {MyErrorStateMatcher} from '../../classes';

@Component({
    selector: 'app-field-input',
    templateUrl: './field-input.component.html',
    styleUrls: ['./field-input.component.scss']
})
export class FieldInputComponent implements OnInit {
    @Input() name: string;
    @Input() label: string;
    @Input() type: string;
    @Input() group: FormGroup;
    @Input() error: string;
    @Input() maxlength: number;

    matcher = new MyErrorStateMatcher();

    constructor() {
        this.type = this.type || 'text';

    }

    ngOnInit() {
    }

}
