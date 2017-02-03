import { Component,OnInit,Pipe,NgModule } from '@angular/core';
import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';




@Component({
    //selector:'pm-products',
    moduleId:module.id,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']    
})
@NgModule({
  declarations: [ProductFilterPipe ]
})
export class ProductListComponent implements OnInit{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    ErrorMessage:string;
    
    products:IProduct[];
    
    constructor(public productService: ProductService){
        
    }
    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit():void{
        console.log("Inside onInit");
        this.productService.getProdcuts()
                            .subscribe(products=>this.products=products,
                                error=>this.ErrorMessage=<any>Error);
    }
    onRatingClicked(message: string):void{
        this.pageTitle = 'Product list: '+message;
    }
}