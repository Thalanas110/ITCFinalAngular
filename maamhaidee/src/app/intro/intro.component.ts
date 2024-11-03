import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent 
{
  // clock clock clock hickety clock
  function updateClock(): void 
  {
    const now: Date = new Date();
    let hours: number | string = now.getHours();
    let minutes: number | string = now.getMinutes();
    let seconds: number | string = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString: string = `${hours}:${minutes}:${seconds}`;
    const clockElement: HTMLElement | null = document.getElementById("clock");

    if (clockElement) 
    {
      clockElement.innerHTML = timeString;
    }

    setTimeout(updateClock, 1000);
  }
}
