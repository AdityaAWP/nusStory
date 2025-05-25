import Auth from "@/components/Auth"

const LoginPage = () => {
  return (
    <div>
      <Auth title="Selamat Datang Kembali" subTitle="Silakan masuk untuk melanjutkan perjalanan sejarah Anda" buttonText="Masuk Dengan Google" description="Kami hanya mendukung login melalui Google untuk keamanan dan kemudahan akses." navigationText="Belum memiliki akun?" secondNavigationText="Daftar Sekarang" navigationLink="/register"/>
    </div>
  )
}

export default LoginPage
