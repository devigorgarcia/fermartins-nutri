import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import {} from "react-hook-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailTransactionalMessageData } from "@elasticemail/elasticemail-client-ts-axios";
import { sendTransactionalEmails } from "../../../utils/email";

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}

export const ContactForm = () => {
  const contactFormSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo Obrigatório").email("Email inválido"),
    phone: yup.string().required("Campo Obrigatório").min(15).max(15),
    service: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(contactFormSchema),
  });

  const toast = useToast();

  const phoneMask = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const onSubmit = (data: any) => {
    console.log(data.phone.length);

    const emailTransactionalMessageData: EmailTransactionalMessageData = {
      Recipients: {
        To: ["igorgg@gmail.com"],
      },
      Content: {
        Body: [
          {
            ContentType: "HTML",
            Charset: "utf-8",
            Content: `<strong>Contato Recebido por ${data.name}</strong>
            <p>
              Nome: <b>${data.name}</b><br />
              E-mail: <b>${data.email}</b><br />
              Telefone: <b>${data.phone}</b><br />
              Serviço: <b>${data.service}</b><br />
              Descrição: <b>${data.description}</b><br />
          </p>            
            `,
          },
          {
            ContentType: "PlainText",
            Charset: "utf-8",
            Content: "Example content",
          },
        ],
        From: "igorgarciatera2@gmail.com",
        Subject: `Contato de ${data.name}`,
      },
    };

    try {
      sendTransactionalEmails(emailTransactionalMessageData);
      toast({
        title: "Formulario Enviado com sucesso",
        description: "Nutri recebeu o formulario",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Houve um Erro",
        description: "Email Inválido",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    }

    reset();
  };

  return (
    <VStack as="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name}>
        {!!errors?.name ? (
          <FormLabel color="red" htmlFor="name">
            Nome
          </FormLabel>
        ) : (
          <FormLabel htmlFor="name">Nome</FormLabel>
        )}

        <Input
          placeholder="Digite seu nome"
          id="name"
          variant="flushed"
          {...register("name")}
        />
        {!!errors?.name && (
          <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        {!!errors?.email ? (
          <FormLabel color="red" htmlFor="email">
            Email
          </FormLabel>
        ) : (
          <FormLabel htmlFor="email">Email</FormLabel>
        )}

        <Input
          placeholder="Digite seu email para contato"
          id="email"
          variant="flushed"
          {...register("email")}
        />
        {!!errors?.email ? (
          <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
        ) : (
          <FormHelperText>cliente@email.com</FormHelperText>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.phone}>
        {!!errors.phone ? (
          <FormLabel color="red" htmlFor="phone">
            Celular
          </FormLabel>
        ) : (
          <FormLabel htmlFor="phone">Celular</FormLabel>
        )}

        <Input
          placeholder="Digite seu Celular"
          id="phone"
          variant="flushed"
          {...register("phone")}
          onChange={(e) => {
            e.target.value = phoneMask(e.target.value);
          }}
        />
        {!!errors.phone && (
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.service}>
        {!!errors.service ? (
          <FormLabel color="red" htmlFor="whichService">
            Qual Serviço
          </FormLabel>
        ) : (
          <FormLabel htmlFor="whichService">Qual Serviço</FormLabel>
        )}

        <Input
          placeholder="Digite qual serviço procura"
          id="whichService"
          variant="flushed"
          {...register("service")}
        />
        {!errors.service && (
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={!!errors.description}>
        {!!errors.description ? (
          <FormLabel color="red" htmlFor="desc">
            Descrição
          </FormLabel>
        ) : (
          <FormLabel htmlFor="desc">Descrição</FormLabel>
        )}

        <Textarea
          id="desc"
          placeholder="Conte um pouco sobre o que deseja"
          variant="flushed"
          {...register("description")}
          resize="none"
          h={"100px"}
        />
        {!!errors.description && (
          <FormErrorMessage>{errors.description.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button
        colorScheme="green"
        color="white"
        width="100%"
        maxWidth={"500px"}
        fontSize="22px"
        type="submit"
        h="50px"
      >
        Enviar
      </Button>
    </VStack>
  );
};
