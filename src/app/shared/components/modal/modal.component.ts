import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() click = new EventEmitter<any>()

  constructor(
		config: NgbModalConfig,
    private router: Router,
		private modalService: NgbModal,
	) { 
		config.backdrop = 'static';
		config.keyboard = false;
	}

  ngOnInit(): void {
  }

  onClose() {
    this.modalService.dismissAll()
    this.router.navigate(["/home"])
  }

}
