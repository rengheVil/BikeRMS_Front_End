import { Component ,OnInit} from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-available-bikes',
  templateUrl: './available-bikes.component.html',
  styleUrl: './available-bikes.component.css'
})
export class AvailableBikesComponent implements OnInit{

  motorbikes: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadMotorbikes();
  }

  loadMotorbikes(): void {
    this.bikeService.getMotorbikes().subscribe(
      (data) => (this.motorbikes = data),
      (error) => console.error(error)
    );
  }

  onUpdate(bike: any): void {
      const updatedBike = { ...bike, brand: 'Updated Brand' }; 
    this.bikeService.updateMotorbike(bike.id, updatedBike).subscribe(
      (response) => {
        console.log('Updated:', response);
        this.loadMotorbikes();
      },
      (error) => console.error(error)
    );
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this motorbike?')) {
      this.bikeService.deleteMotorbike(id).subscribe(
        () => this.loadMotorbikes(),
        (error) => console.error(error)
      );
    }
  }
}
