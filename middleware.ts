import { auth } from "@/auth";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Esto inicializa la sesión pero no bloquea nada por ahora
  const session = await auth();
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Excluye archivos estáticos y rutas de API internas de Next.js
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
