import connDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

// GET: Ambil 1 produk
export async function GET(req, { params }) {
  await connDB();
  const product = await Product.findById(params.id);
  return NextResponse.json({ success: true, product });
}

// PUT: Update produk
export async function PUT(req, { params }) {
  await connDB();
  const data = await req.json();

  const updatedProduct = await Product.findByIdAndUpdate(params.id, data, {
    new: true,
  });

  return NextResponse.json({ success: true, product: updatedProduct });
}

// DELETE: Hapus produk
export async function DELETE(req, { params }) {
  await connDB();
  await Product.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
