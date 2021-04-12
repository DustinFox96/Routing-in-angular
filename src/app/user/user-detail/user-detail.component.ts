import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = null;
  id: number = 0;
  showVerify: boolean = false;

  constructor(
    private usersrv: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  toggleVerify(): void {
    this.showVerify= !this.showVerify;
  }

  delete(): void {
    this.usersrv.remove(this.user).subscribe(
      res => {
        console.log("Delete was successful!");
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error(err);
      }
    )
  }

  edit(): void {
    this.router.navigateByUrl(`/users/edit/this${this.id}`);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.usersrv.get(+this.id).subscribe(
      res => {
        console.log("User:", res);
        this.user = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
