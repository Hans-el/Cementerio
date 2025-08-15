import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import Swal from 'sweetalert2';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cedula: string = '';
  contrasena: string = '';
  showPassword: boolean = false; // Variable para mostrar/ocultar la contraseña

  constructor(private apiService: ApiService, private router: Router) {}

  // para verificar la clave mientras se escribe
  togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
   }

  onSubmit() {
    this.apiService.login(this.cedula, this.contrasena).subscribe(
      (response: any) => {
        // Guardar el token en el almacenamiento local
        localStorage.setItem('token', response.token);

        // Mostrar notificación de éxito con SweetAlert2
        Swal.fire({
          title: 'Inicio de sesión exitoso!',
          text: 'Has iniciado sesión correctamente.',
          timerProgressBar: true,
          timer: 2200,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirigir al usuario después de cerrar la alerta
          this.router.navigate(['/dashboard']); // Luego de iniciar sesión, redirige al usuario a la página del dashboard, que es donde se mostrarán el mapa del cementerio
        });
      },
      (error) => {
        // Mostrar notificación de error con SweetAlert2
        Swal.fire({
          title: 'Error!',
          text: 'Cédula o contraseña incorrectos.',
          timerProgressBar: true,
          timer: 2200,
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
