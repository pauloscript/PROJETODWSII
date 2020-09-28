package com.example.demo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Calcados {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer Id_Calcados;
	
	private String Titulo;
	private String Marca;
	private String Descricao;
	@Column(name="Preco", columnDefinition="Decimal(10,2) default '00.00'")
	private String Preco;
	public Integer getId_Calcados() {
		return Id_Calcados;
	}
	public void setId_Calcados(Integer id_Calcados) {
		Id_Calcados = id_Calcados;
	}
	public String getTitulo() {
		return Titulo;
	}
	public void setTitulo(String titulo) {
		Titulo = titulo;
	}
	public String getMarca() {
		return Marca;
	}
	public void setMarca(String marca) {
		Marca = marca;
	}
	public String getDescricao() {
		return Descricao;
	}
	public void setDescricao(String descricao) {
		Descricao = descricao;
	}
	public String getPreco() {
		return Preco;
	}
	public void setPreco(String preco) {
		Preco = preco;
	}
	@Override
	public String toString() {
		return "Calcados [Id_Calcados=" + Id_Calcados + ", Titulo=" + Titulo + ", Marca=" + Marca + ", Descricao="
				+ Descricao + ", Preco=" + Preco + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Descricao == null) ? 0 : Descricao.hashCode());
		result = prime * result + ((Id_Calcados == null) ? 0 : Id_Calcados.hashCode());
		result = prime * result + ((Marca == null) ? 0 : Marca.hashCode());
		result = prime * result + ((Preco == null) ? 0 : Preco.hashCode());
		result = prime * result + ((Titulo == null) ? 0 : Titulo.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Calcados other = (Calcados) obj;
		if (Descricao == null) {
			if (other.Descricao != null)
				return false;
		} else if (!Descricao.equals(other.Descricao))
			return false;
		if (Id_Calcados == null) {
			if (other.Id_Calcados != null)
				return false;
		} else if (!Id_Calcados.equals(other.Id_Calcados))
			return false;
		if (Marca == null) {
			if (other.Marca != null)
				return false;
		} else if (!Marca.equals(other.Marca))
			return false;
		if (Preco == null) {
			if (other.Preco != null)
				return false;
		} else if (!Preco.equals(other.Preco))
			return false;
		if (Titulo == null) {
			if (other.Titulo != null)
				return false;
		} else if (!Titulo.equals(other.Titulo))
			return false;
		return true;
	}

	
}
