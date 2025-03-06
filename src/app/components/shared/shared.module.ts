import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent] // in exports we put components that can be exported by this module, due to exports we are able to import this module in our root module file that is AppModule
})
export class SharedModule {

}