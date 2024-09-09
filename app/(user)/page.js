"use client"
import Link from "next/link";
import UserLayout from "./layout";
import { useMyContext } from "../context";

export default function Home() {
  const { Adverts } = useMyContext()

  return (
    <>
      burası ürünler sayfası
    </>
  );
}
