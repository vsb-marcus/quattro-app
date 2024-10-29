import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// expense.model.ts
export interface Expense {
  id?: number; // Opcional para distinguir entre criação e edição
  nome: string;
  centroDeCusto: string;
  valor: number;
}

@Component({
  selector: 'app-add-edit-despesas',
  templateUrl: './add-edit-despesas.component.html',
  styleUrl: './add-edit-despesas.component.scss'
})
export class AddEditDespesasComponent {
  @Input() expense?: Expense;
  expenseForm: FormGroup;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicialização do FormGroup usando FormBuilder
    this.expenseForm = this.fb.group({
      nome: ['', Validators.required],
      centroDeCusto: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  ngOnInit(): void {
    this.isEditMode = !!this.expense;

    // Inicializar o FormGroup com controles e validações
    this.expenseForm = this.fb.group({
      nome: [this.expense?.nome || '', Validators.required],
      centroDeCusto: [this.expense?.centroDeCusto || '', Validators.required],
      valor: [this.expense?.valor || '', [Validators.required, Validators.min(0.01)]],
    });
  }

  onSubmit(): void {
    if (this.expenseForm?.valid) {
      const expenseData: Expense = this.expenseForm.value;

      if (this.isEditMode) {
        // Lógica de atualização de despesa
        console.log('Atualizar despesa', expenseData);
      } else {
        // Lógica de criação de despesa
        console.log('Criar nova despesa', expenseData);
      }

      this.router.navigate(['/despesas']); // Navega de volta para a lista de despesas
    }
  }
}
