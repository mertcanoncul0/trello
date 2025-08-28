import { ModalProvider } from "@/components/providers/modal.provider";
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "sonner";

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/select-org"
            afterSignUpUrl="/select-org"
        >
            <Toaster />
            <ModalProvider />
            {children}
        </ClerkProvider>
    );
};

export default PlatformLayout