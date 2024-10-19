import Image from "next/image";
import {Container, Title, Categories, SortPopup, TopBar, Filters, ProductsGroupList} from '@/components/shared/index'
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold"/>
      </Container>
        <TopBar/>


      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters/>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
              <ProductsGroupList title="Пиццы" items={[
              {
                id: 1,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 2,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 3,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 4,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 5,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 6,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              ]} categoryId={1}/>
              <ProductsGroupList title="Комбо" items={[
              {
                id: 1,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 2,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 3,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 4,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 5,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              {
                id: 6,
                name: "Mushroom",
                imageUrl: "https://media.dodostatic.net/image/r:233x233/11EF61F78BBE5063A44AC0B2FE810D9A.avif",
                price: 100,
                items: [{price: 100}]
              },
              ]} categoryId={2}/>
            </div>
          </div>
        </div>

        
      </Container>
    </>
  );
}
