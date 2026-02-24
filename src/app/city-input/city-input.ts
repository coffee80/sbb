import { Component, inject, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CityService } from '../city-service';
import { City } from '../model/city';
import { debounceTime, finalize } from 'rxjs';

@Component({
  selector: 'app-city-input',
  imports: [FormsModule],
  templateUrl: './city-input.html',
  styleUrl: './city-input.css',
})
export class CityInput {


    label = input<string>("");
    city = model<City | null>(null);

    cityService = inject(CityService);    
    results = signal<City[]>([]);
    errors = signal<String>("");
    loading = signal<boolean>(false);
    selected = signal<boolean>(false);

    key:string="";
    
    findCity():void{
        
        if(this.key.length<3)
            return;
        
        this.loading.set(true);
        this.cityService.findCitiesByName(this.key)
        .pipe(
            finalize(()=>this.loading.set(false)), 
        )
        .subscribe(
            {
                next:json=>
                {
                    this.results.set(json);
                    console.log(json.length);
                    if(json.length==1)
                        this.selectCity(json[0]);
                },
                error:error=>this.errors.set(error)
            }
        );
    }

    selectCity(result:City):void{
        this.city.set(result); // e avviserà mio padre...
        this.results.set([]);
        this.key = result.name+" "+result.province+" "+result.region;
        this.selected.set(true);

    }

    deselect():void{
        this.city.set(null);
        this.selected.set(false);
        this.key = "";
    }

}
