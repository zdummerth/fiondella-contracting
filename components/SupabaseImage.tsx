import Image from "next/image";

const SupabaseImage = ({ resize, ...props }: any) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `https://iyepowyaftcjvbuntjts.supabase.co/storage/v1/render/image/public/outdoorsbychaz-public/${src}?width=${width}&resize=${
      props.resize || "contain"
    }&quality=${quality || 75}`;
  };

  return <Image loader={myLoader} {...props} />;
};

export default SupabaseImage;
