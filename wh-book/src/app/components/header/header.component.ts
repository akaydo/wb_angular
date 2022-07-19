import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout()
    this.isLogout.emit()
  }
}
