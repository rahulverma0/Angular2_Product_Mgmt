import { CanActivate,ActivatedRouteSnapshot,Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailGuard implements CanActivate{

    constructor(private _router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot):boolean{
        console.log("Inside guard code");
        let id=+route.url[1].path;
        console.log("product Id : "+id);
        if(isNaN(id) || id<1){
            alert("Invalid product Id");
            this._router.navigate(['/products']);
            return false;
        };
        return true;
    }
}